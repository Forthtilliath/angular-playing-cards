import { Component } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  monster1: Monster;

  constructor() {
    this.monster1 = new Monster({
      name: 'Pikapachu',
      hp: 40,
      figureCaption: 'N°025 Monster',
      attackName: 'Geo Impact',
      attackStrength: 60,
      attackDescription:
        'This is a long description of a monster attack. Probably something to do wtih electivity...',
    });
  }
}
