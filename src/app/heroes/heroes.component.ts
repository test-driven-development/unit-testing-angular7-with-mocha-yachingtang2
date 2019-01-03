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
    this.getHeroes().then(heroes => this.heroes = heroes);
  }

  getHeroes(): Promise<Hero[]> {
    return this.heroService.getHeroes().toPromise().then(heroes => {
      return heroes;
    });
  }

  add(name: string): void {
    name = name.trim();
    const strength = 11;
    if (!name) { return; }
    this.heroService.addHero({ name, strength } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  // delete(hero: Hero): Promise<any> {
  //   return this.heroService.deleteHero(hero).toPromise().then(() => {
  //     this.heroes = this.heroes.filter(h => h !== hero);
  //     // return hero;
  //   });
  // }
}
