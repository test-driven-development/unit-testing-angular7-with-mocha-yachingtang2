import {HeroesComponent} from './heroes.component';
import {of} from 'rxjs';

const td = require('testdouble');
const {when, constructor} = td;

describe('HeroesComponent', () => {
  it('return heroes when getHeroes() is called', () => {
    const heroes = [{id: 1, name: 'a', strength: 8}, {id: 2, name: 'b', strength: 24}];

    const heroService = new (constructor(require('../hero.service').HeroService))();

    when(heroService.getHeroes()).thenReturn(of(heroes));

    const heroesComponent = new HeroesComponent(heroService);

    heroesComponent.getHeroes().then(() => {
      heroesComponent.heroes.length.should.equal(2);
      heroesComponent.heroes.should.deepEqual(heroes);
    });
  });

  it('add a hero to existing heroes when add() is called', () => {
    const heroes = [{id: 1, name: 'a', strength: 8}, {id: 2, name: 'b', strength: 24}];
    const heroService = new (constructor(require('../hero.service').HeroService))();
    const hero = {id: 3, name: 'c', strength: 11};

    when(heroService.addHero({name: 'c', strength: 11})).thenReturn(of(hero));

    const heroesComponent = new HeroesComponent(heroService);
    heroesComponent.heroes = heroes;

    heroesComponent.add('c').then(() => {
      heroesComponent.heroes.length.should.equal(3);
      heroesComponent.heroes[2].should.deepEqual(hero);
    });
  });

  it('delete a hero when delete is called');
});
