import {MessageService} from './message.service';

describe('MessageService', () => {
  it('no message, the length is 0', () => {
    new MessageService().messages.length.should.equal(0);
  });

  it('add a message, the length is 1', () => {
    const messageService = new MessageService();
    messageService.add('testing');

    messageService.messages.length.should.equal(1);
  });

  it('clear message, the length is 0', () => {
    const messageService = new MessageService();
    messageService.add('testing');

    messageService.clear();

    messageService.messages.length.should.equal(0);
  });
});
