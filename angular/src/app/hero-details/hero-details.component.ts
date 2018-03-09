import { Component, OnInit, Input } from '@angular/core';
import { HEROES } from '../heroes';
import {ActivatedRoute} from '@angular/router';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})

export class HeroDetailsComponent implements OnInit {
  hero: Hero;

  constructor( private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.hero = HEROES[params['id']-1];
    
    })
  }

  ngOnInit() {
  }

}
