import {HeroComponent} from './hero.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Hero} from '../hero';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('HeroComponent', () => {
  let fixture: ComponentFixture<HeroComponent>;
  let component: HeroComponent;
  let buttonElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    buttonElement = fixture.debugElement.query(By.css('button'));
  });

  it('should receive a Hero from input variable', () => {
    const hero: Hero = {id: 1, name: 'test', strength: 1};
    component.hero = hero;

    fixture.detectChanges();

    component.hero.should.deepEqual(hero);
  });

  it('trigger delete.next() when onDeleteClick is called');
});
