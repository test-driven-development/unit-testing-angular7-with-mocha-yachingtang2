import {StrengthPipe} from './strength.pipe';

describe('StrengthPipe', () => {
  it('canary test should be successful', () => {
    true.should.be.true();
  });

  it('show strength 1 is weak', () => {
    const strengthPipe = new StrengthPipe();

    strengthPipe.transform(1).should.equal('1 (weak)');
  });

  it('show strength 11 is strong', () => {
    const strengthPipe = new StrengthPipe();

    strengthPipe.transform(11).should.equal('11 (strong)');
  });

  it('show strength 21 is unbelievable');
});
