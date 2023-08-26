import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import SequelizeTeam from '../database/models/SequelizeTeam';
import { teams } from './mocks/Team.mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teams tests', () => {
  it('Must return all times', async function () {
    sinon.stub(SequelizeTeam, 'findAll').resolves(teams as any);
    
    const { status, body } = await chai.request(app).get('/teams')
    expect(status).to.be.eq(200);
    expect(body).to.be.deep.equal(teams);
  });

  it('Must return a team by id', async function () {
    sinon.stub(SequelizeTeam, 'findByPk').resolves(teams[4] as any);
    
    const { status, body } = await chai.request(app).get('/teams/5')
    expect(status).to.be.eq(200);
    expect(body).to.be.deep.equal(teams[4]);
  });

  it('Must not return a team with non-existent id', async function () {
    sinon.stub(SequelizeTeam, 'findByPk').resolves(null);
    
    const { status, body } = await chai.request(app).get('/teams/55')
    expect(status).to.be.eq(404);
    expect(body).to.be.deep.equal({ message: 'Team 55 not found' });
  });

  // it('Must not return a team with non-existent id', async function () {
  //   sinon.stub(SequelizeTeam, 'findByPk').resolves(null);
    
  //   const { status, body } = await chai.request(app).get('/teams/5')
  //   expect(status).to.be.eq(200);
  //   expect(body).to.be.deep.equal(teams[4]);
  // });
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  // it('Seu sub-teste', () => {
  //   expect(false).to.be.eq(true);
  // });
  afterEach(sinon.restore);
});
