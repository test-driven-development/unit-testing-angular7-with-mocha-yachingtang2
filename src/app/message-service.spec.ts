import * as should from 'should';
import {MessageService} from './message.service';

describe('message service', () => {
  it(`has a passing canary test`, () => {
    true.should.be.true(`something's bugging the automated test infrastructure`);
  });

  it(`starts with no messages`, () => {
    const service = new MessageService();
    service.messages.length.should.equal(0);
  });

  it(`adds a message`, () => {
    const service = new MessageService();
    service.add('dummy');
    service.messages.length.should.equal(1);
  });

  it(`clears all messages`, () => {
    const service = new MessageService();
    service.add('dummy');
    service.clear();
    service.messages.length.should.equal(0);
  });
});
