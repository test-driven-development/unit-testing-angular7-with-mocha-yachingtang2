import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes().then();
  }

  getHeroes(): Promise<void> {
    return this.heroService.getHeroes().toPromise().then(heroes => {
      this.heroes = heroes;
    });
  }

  add(name: string): Promise<void> {
    name = name.trim();
    const strength = 11;
    if (!name) { return; }

    return this.heroService.addHero({ name, strength } as Hero).toPromise().then(hero => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
