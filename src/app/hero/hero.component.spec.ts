import * as should from 'should';
import {getTestBed, TestBed} from '@angular/core/testing';
import {HeroesComponent} from '../heroes/heroes.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('hero component', () => {
  it(`has a passing canary test`, () => {
    true.should.be.true(`something's bugging the automated test infrastructure`);
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });
});

