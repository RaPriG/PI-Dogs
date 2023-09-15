/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
const dog =
{
  name: "dogs creado desde test",
  temperaments: [3, 2],
  weight_min: 3,
  weight_max: 6,
  height_min: 23,
  height_max: 29,
  life_span: "10 - 12 years",
  image: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"

};

describe('Dog routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
    
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));

  describe('GET /api/dogs', () => {
    it('should get 200', () =>
      agent.get('/api/dogs').expect(200)
    );
  });

  describe('GET /api/dogs/:id', () => {
    it('should get 200', () =>
      agent.get('/api/dogs/1').expect(200)
    );
  });

  describe('GET /api/dogs/name', () => {
    it('should get 200', () =>
      agent.get('/api/dogs/name?value=cocker').expect(200)
    );
  });

  describe('GET /api/temperaments', () => {
    it('should get 200', () =>
      agent.get('/api/temperaments').expect(200)
    );
  });

});
