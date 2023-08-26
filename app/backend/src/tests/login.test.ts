import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { decode } from 'jsonwebtoken';
import { app } from '../app';
import SequelizeUser from '../database/models/SequelizeUser';
import { userAdmin } from './mocks/User.mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Login tests', () => {
  it('must return status code 401 when the token non-inexistent', async function () {
    const { status, body } = await chai.request(app).get('/login/role')
    expect(status).to.be.equal(401);
    expect(body.message).to.be.equal('Token not found');
  });
  it('must return status code 401 when the token is invalid', async function () {
    const { status, body } = await chai.request(app).get('/login/role')
      .auth('authorization', 'tokenFake');
    
    expect(status).to.be.equal(401);
    expect(body.message).to.be.equal('Token must be a valid token');
  });
  it('must return status code 200 when the token is valid', async function () {
    sinon.stub(SequelizeUser, 'findOne').resolves(userAdmin as any);
    const { status, body } = await chai.request(app).get('/login/role')
      .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicGFzc3dvcmQiOiIkMmEkMDgkeGkuSHhrMWN6QU8wblpSLi5CMzkzdTEwYUVEMFJRMU4zUEFFWFE3SHh0TGpLUEVaQnUuUFciLCJpYXQiOjE2OTMwNjYyNTYsImV4cCI6MTY5MzE1MjY1Nn0.yvfmNgPoG6gdo5TgmAmIkKJeCHnCqVWDHiRZ10huu3s');
    
    expect(status).to.be.equal(200);
    expect(body.role).to.be.equal('admin');
  });
 
  afterEach(sinon.restore);
});
