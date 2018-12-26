import * as should from 'should';
import {MessageService} from './message.service';

describe('message service', () => {
  let service;
  beforeEach(() => {
    service = new MessageService();
  });

  it(`has a passing canary test`, () => {
    true.should.be.true(`something's bugging the automated test infrastructure`);
  });

  it(`starts with no messages`, () => {
    service.messages.length.should.equal(0);
  });

  it(`adds a message`, () => {
    service.add('dummy');
    service.messages.length.should.equal(1);
  });

  it(`clears all messages`, () => {
    service.add('dummy');
    service.clear();
    service.messages.length.should.equal(0);
  });
});
