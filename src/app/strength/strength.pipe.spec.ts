import * as should from 'should';
import {StrengthPipe} from './strength.pipe';

describe('strength pipe', () => {
  it(`gives 'weak' for n < 10`, () => {
    (new StrengthPipe()).transform(-10000000).should.equal(
        `-10000000 (weak)`);
  });

  it(`gives 'strong' for 10 <= n < 20`, () => {
    (new StrengthPipe()).transform(10).should.equal(`10 (strong)`);
  });

  it(`gives 'unbelievable' for n >= 20`);
});


