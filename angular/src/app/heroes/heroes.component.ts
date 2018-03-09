import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  // hero: Hero = {
  //   id: 1,
  //   photoS: 'https://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg',
  //   photoG: 'https://i.annihil.us/u/prod/marvel/i/mg/6/60/538cd3628a05e.jpg',
  //   nick: 'Spider-Man',
  //   details: 'Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people. ',
  //   realName: 'Peter Benjamin Parker',
  //   height: '5\'10"',
  //   weight: '167 lbs.',
  //   powers: 'Peter can cling to most surfaces, has superhuman strength (able to lift 10 tons optimally) and is roughly 15 times more agile than a regular human. The combination of his acrobatic leaps and web-slinging enables him to travel rapidly from place to place. His spider-sense provides an early warning detection system linked with his superhuman kinesthetics, enabling him the ability to evade most any injury, provided he doesn\'t cognitively override the autonomic reflexes. Note: his power enhancements through his transformation by the Queen and after battling Morlun - including his organic web glands and stingers - have been undone after Spider-Man\'s deal with Mephisto',
  //   abilities: ' Peter is an accomplished scientist, inventor and photographer.',
  //   affiliations: 'Avengers, formerly the Secret Defenders, "New Fantastic Four", the Outlaws',
  //   first: 'Amazing Fantasy #15 (1962)',
  //   origin: 'Amazing Fantasy #15 (1962)'
  // };

  constructor() { }

  ngOnInit() {
  }

}
