import * as should from 'should';
import {HeroesComponent} from './heroes.component';
import {of} from 'rxjs/internal/observable/of';

const td = require('testdouble');
const {reset, when, constructor} = td;

describe('heroes', () => {
  afterEach(() => {
    reset();
  });

  it(`has a passing canary test`, () => {
    true.should.be.true(`something's bugging the automated test infrastructure`);
  });

  it(`collaborates with the heroes service to delete`, () => {
    // arrange
    const hs = [{id: 1, name: 'a', strength: 8}, {id: 2, name: 'b', strength: 24}];

    // require and create the heroService test double
    const svc = new (constructor(require('../hero.service').HeroService))();

    // stub deleteHero function to return an observable
    when(svc.deleteHero(hs[0])).thenReturn(of());

    // prepare the system under test
    const component = new HeroesComponent(svc);
    component.heroes = hs;
    component.heroes.length.should.equal(2);

    // act
    component.delete(hs[0]);
    // assert
    component.heroes.length.should.equal(0);
  });
});


