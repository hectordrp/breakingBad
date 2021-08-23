import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../models/character';
import { Quote } from '../models/quote';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  characterId: number = 0;
  selectedCharacter: Character ;
  randomQuote: Quote;

  constructor(private route: ActivatedRoute,
              private requestService: RequestService) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.characterId = params.id;

      this.requestService.getCharacters(this.characterId)
        .subscribe( (character: Character[] ) => {
          console.log(character);
          this.selectedCharacter = character[0];

          this.requestService.getRandomQuoteByAuthor(this.selectedCharacter.name).subscribe((quote: Quote[]) => {
            this.randomQuote = quote[0];
            console.log(this.randomQuote)
          });
      });

    })
  }


}
