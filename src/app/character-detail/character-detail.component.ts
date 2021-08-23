import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faLongArrowAltLeft, faQuoteLeft, faQuoteRight, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { fromEvent } from 'rxjs';
import { Character } from '../models/character';
import { Quote } from '../models/quote';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  faQuoteLeft = faQuoteLeft;
  faQuoteRight = faQuoteRight;
  faSync = faSyncAlt;
  faBack = faLongArrowAltLeft;

  
  characterId: number = 0;
  selectedCharacter: Character ;
  randomQuote: Quote;
  searching: boolean = false;
  constructor(private route: ActivatedRoute,
    private requestService: RequestService,
    private router: Router) { }
    
    ngOnInit(): void {
      const refreshQuoteBtn = document.getElementById('refreshQuoteBtn');
      const goBackBtn = document.getElementById('goBackBtn');
      const refreshQuote = fromEvent(refreshQuoteBtn, 'click');
      const goBack = fromEvent(goBackBtn, 'click').subscribe(() => this.router.navigate(['']));


      refreshQuote.subscribe(() => {
        this.refreshQuote();
      });

      this.route.params.subscribe( params => {
      this.characterId = params.id;

      this.requestService.getCharacters(this.characterId)
        .subscribe( (character: Character[] ) => {
          console.log(character);
          this.selectedCharacter = character[0];

          this.refreshQuote();
      });

    })
  }

  refreshQuote() {
    this.randomQuote ? this.randomQuote.quote = "..." : "";
    this.requestService.getRandomQuoteByAuthor(this.selectedCharacter.name).subscribe((quote: Quote[]) => {
      this.randomQuote = quote[0];
      console.log(this.randomQuote);
    });
  }


}
