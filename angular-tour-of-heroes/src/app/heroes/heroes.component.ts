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
  
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  constructor(private heroService: HeroService) { } //inject service into component

  ngOnInit() {
    //code here gets called after constructor - best practice to place init code here and not in ctor
    this.getHeroes();
  }

}