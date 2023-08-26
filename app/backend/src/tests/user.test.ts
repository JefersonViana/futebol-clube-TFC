import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { decode } from 'jsonwebtoken';
import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import SequelizeUser from '../database/models/SequelizeUser';
import { userAdmin } from './mocks/User.mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Users tests', () => {
  it('Must return a token', async function () {
    sinon.stub(SequelizeUser, 'findOne').resolves(userAdmin as any);
    
    const { status, body } = await chai.request(app).post('/login').send({
      email: 'admin@admin.com',
      password: 'secret_admin',
    })
    expect(status).to.be.eq(200);
    const payload = decode(body.token);
    const { iat, exp, ...user} = payload as any;
    
    expect(user).to.be.deep.equal(userAdmin);
  });
  it('must return status code 401 when the user non-inexistent in bank from data', async function () {
    sinon.stub(SequelizeUser, 'findOne').resolves(null);
    
    const { status, body } = await chai.request(app).post('/login').send({
      email: 'admin@adminfake.com',
      password: 'secret_admin',
    })
    expect(status).to.be.eq(401);
    
    expect(body.message).to.be.equal('Invalid email or password');
  });

  it('must return status code 400 when not is passed the field email', async function () {
    const { status, body } = await chai.request(app).post('/login').send({
      password: 'secret_admin',
    })
    expect(status).to.be.eq(400);
    
    expect(body.message).to.be.equal('All fields must be filled');
  });

  it('must return status code 400 when not is passed the field password', async function () {
    const { status, body } = await chai.request(app).post('/login').send({
      email: 'admin@admin.com',
    })
    expect(status).to.be.eq(400);
    
    expect(body.message).to.be.equal('All fields must be filled');
  });

  it('must return status code 401 when not is passed a email valid', async function () {
    const { status, body } = await chai.request(app).post('/login').send({
      email: 'admin@admin',
      password: 'secret_admin',
    })
    expect(status).to.be.eq(401);
    
    expect(body.message).to.be.equal('Invalid email or password');
  });

  it('must return status code 401 when not is passed a password valid', async function () {
    const { status, body } = await chai.request(app).post('/login').send({
      email: 'admin@admin.com',
      password: 'secret',
    })
    expect(status).to.be.eq(401);
    
    expect(body.message).to.be.equal('Invalid email or password');
  });

  it('must return status code 400 when the field email from empty', async function () {
    const { status, body } = await chai.request(app).post('/login').send({
      email: '',
      password: 'secret_admin',
    })
    expect(status).to.be.eq(400);
    
    expect(body.message).to.be.equal('All fields must be filled');
  });

  it('must return status code 400 when the field password from empty', async function () {
    const { status, body } = await chai.request(app).post('/login').send({
      email: 'admin@admin.com',
      password: '',
    })
    expect(status).to.be.eq(400);
    
    expect(body.message).to.be.equal('All fields must be filled');
  });
 
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
