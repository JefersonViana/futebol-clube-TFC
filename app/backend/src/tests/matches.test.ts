import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { decode } from 'jsonwebtoken';
import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import {
  allMatches,
  allMatchesWithFilteredFalse,
  allMatchesWithFilteredTrue,
} from './mocks/Matches.mocks';
import SequelizeMatches from '../database/models/MatchesModel';

chai.use(chaiHttp);

const { expect } = chai;

describe('Matches tests', () => {
  it('Must return all matches', async function () {
    sinon.stub(SequelizeMatches, 'findAll').resolves(allMatches as any);
    
    const { status, body } = await chai.request(app).get('/matches')
    expect(status).to.be.eq(200);
    
    expect(body).to.be.deep.equal(allMatches);
  });
  
  it('must return all matches in progress', async function () {
    sinon.stub(SequelizeMatches, 'findAll').resolves(allMatchesWithFilteredTrue as any);
    
    const { status, body } = await chai.request(app).get('/matches?inProgress=true')
    expect(status).to.be.eq(200);
    
    expect(body).to.be.deep.equal(allMatchesWithFilteredTrue);
  });

  it('must return all matches finish', async function () {
    sinon.stub(SequelizeMatches, 'findAll').resolves(allMatchesWithFilteredFalse as any);
    
    const { status, body } = await chai.request(app).get('/matches?inProgress=false')
    expect(status).to.be.eq(200);
    
    expect(body).to.be.deep.equal(allMatchesWithFilteredFalse);
  });

  afterEach(sinon.restore);
});
