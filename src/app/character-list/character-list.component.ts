import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Character } from '../models/character';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  faSearch = faSearch;

  characters: Character[] = [];
  searchFilter: any;

  private characterSub: Subscription;

  public search: any = '';

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterSub = this.characterService.characters.subscribe((characters) => {
      this.characters = characters;
    })
  }

}
