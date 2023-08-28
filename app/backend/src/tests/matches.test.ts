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
  createMatch,
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

  it('must return Match updated when a id to passed', async function () {
    const { status, body } = await chai.request(app).patch('/matches/48')
      .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicGFzc3dvcmQiOiIkMmEkMDgkeGkuSHhrMWN6QU8wblpSLi5CMzkzdTEwYUVEMFJRMU4zUEFFWFE3SHh0TGpLUEVaQnUuUFciLCJpYXQiOjE2OTMyMjQwMjgsImV4cCI6MTY5MzMxMDQyOH0.nXO7WGw1oaVNg9lw4gEV4g6p6tai45NEJ4bpnwgON5w')
      .send({ homeTeamGoals: 3, awayTeamGoals: 2 });
    expect(status).to.be.eq(200);
    
    expect(body.message).to.be.equal('Match updated');
  });

  it('must return Finished when a match to updated', async function () {
    const { status, body } = await chai.request(app).patch('/matches/48/finish')
      .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicGFzc3dvcmQiOiIkMmEkMDgkeGkuSHhrMWN6QU8wblpSLi5CMzkzdTEwYUVEMFJRMU4zUEFFWFE3SHh0TGpLUEVaQnUuUFciLCJpYXQiOjE2OTMyMjQwMjgsImV4cCI6MTY5MzMxMDQyOH0.nXO7WGw1oaVNg9lw4gEV4g6p6tai45NEJ4bpnwgON5w');
    
      expect(status).to.be.eq(200);
    
    expect(body.message).to.be.equal('Finished');
  });

  it('must return a match created with all properties, id and inProgress', async function () {
    sinon.stub(SequelizeMatches, 'create').resolves(createMatch as any);
    const { status, body } = await chai.request(app).post('/matches')
      .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicGFzc3dvcmQiOiIkMmEkMDgkeGkuSHhrMWN6QU8wblpSLi5CMzkzdTEwYUVEMFJRMU4zUEFFWFE3SHh0TGpLUEVaQnUuUFciLCJpYXQiOjE2OTMyMjQwMjgsImV4cCI6MTY5MzMxMDQyOH0.nXO7WGw1oaVNg9lw4gEV4g6p6tai45NEJ4bpnwgON5w')
      .send({ homeTeamId: 16, awayTeamId: 8,  homeTeamGoals: 2, awayTeamGoals: 2 });
    
      expect(status).to.be.eq(201);
    
    expect(body).to.be.deep.equal({
      id: 49,
      inProgress: true,
      homeTeamId: 16,
      awayTeamId: 8,
      homeTeamGoals: 2,
      awayTeamGoals: 2
    });
  });

  it('it should not be possible to create a match with opposing teams being equal', async function () {
    const { status, body } = await chai.request(app).post('/matches')
      .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicGFzc3dvcmQiOiIkMmEkMDgkeGkuSHhrMWN6QU8wblpSLi5CMzkzdTEwYUVEMFJRMU4zUEFFWFE3SHh0TGpLUEVaQnUuUFciLCJpYXQiOjE2OTMyMjQwMjgsImV4cCI6MTY5MzMxMDQyOH0.nXO7WGw1oaVNg9lw4gEV4g6p6tai45NEJ4bpnwgON5w')
      .send({ homeTeamId: 16, awayTeamId: 16,  homeTeamGoals: 2, awayTeamGoals: 2 });
    
      expect(status).to.be.eq(422);
    
    expect(body).to.be.deep.equal({
      message: 'It is not possible to create a match with two equal teams',
    });
  });

  it('it should not be possible to create a match when one of the teams does not exist in the database', async function () {
    const { status, body } = await chai.request(app).post('/matches')
      .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicGFzc3dvcmQiOiIkMmEkMDgkeGkuSHhrMWN6QU8wblpSLi5CMzkzdTEwYUVEMFJRMU4zUEFFWFE3SHh0TGpLUEVaQnUuUFciLCJpYXQiOjE2OTMyMjQwMjgsImV4cCI6MTY5MzMxMDQyOH0.nXO7WGw1oaVNg9lw4gEV4g6p6tai45NEJ4bpnwgON5w')
      .send({ homeTeamId: 16, awayTeamId: 999,  homeTeamGoals: 2, awayTeamGoals: 2 });
    
      expect(status).to.be.eq(404);
    
    expect(body).to.be.deep.equal({
      message: 'There is no team with such id!',
    });
  });

  afterEach(sinon.restore);
});
