import * as should from 'should';

describe('message service', () => {
  it(`has a passing canary test`, () => {
    true.should.be.true(`something's bugging the automated test infrastructure`);
  });

  it(`starts with no messages`);
  it(`adds a message`);
  it(`clears all messages`);
});
