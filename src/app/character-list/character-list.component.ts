import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Character } from '../models/character';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  faSearch = faSearch;

  characters: Character[] = [];
  searchFilter: any;

  public search: any = '';

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getCharacters().subscribe((characters: Character[]) => {
      this.characters = characters;
    });
  }

}
