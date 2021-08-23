import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../models/character';
import { RequestService } from '../services/request.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  characters = new BehaviorSubject<Character[]>(null);

  constructor(private requestService: RequestService) { }

  loadCharacters() {
    this.requestService.getCharacters().subscribe((characters: Character[]) => {
      this.characters.next(characters);
    });
  }
}
