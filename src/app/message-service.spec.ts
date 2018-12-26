import * as should from 'should';
import {MessageService} from './message.service';

describe('message service', () => {
  it(`has a passing canary test`, () => {
    true.should.be.true(`something's bugging the automated test infrastructure`);
  });

  it(`starts with no messages`, () => {
    const service = new MessageService();
    service.messages.length.should.equal(1);
  });

  it(`adds a message`);
  it(`clears all messages`);
});
