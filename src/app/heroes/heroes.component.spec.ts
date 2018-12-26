import * as should from 'should';

const td = require('testdouble');
const {reset} = td;

describe('heroes', () => {
  afterEach(() => {
    reset();
  });

  it(`has a passing canary test`, () => {
    true.should.be.true(`something's bugging the automated test infrastructure`);
  });

  it(`collaborates with the heroes service to delete`);
});


