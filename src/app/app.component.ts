import { Component, OnInit } from '@angular/core';
import { CharacterService } from './character-list/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'breakingBadPage';

  constructor (private characterService: CharacterService) {}

  ngOnInit() {
    this.characterService.loadCharacters();
  }
}
