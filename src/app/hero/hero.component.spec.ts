import * as should from 'should';

describe('hero component', () => {
  it(`has a passing canary test`, () => {
    true.should.be.true(`something's bugging the automated test infrastructure`);
  });
});

