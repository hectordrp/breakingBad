import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { map } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Character } from '../models/character';
import { Episode } from '../models/episode';
import { Quote } from '../models/quote';
import { Death, DeathCount } from '../models/death';

@Injectable({ providedIn: 'root'})
export class RequestService {

  constructor(protected http: HttpClient) { }

  //get all characters or by Id:
  getCharacters(id?: number){
    return this.http
      .get<Character[]>(`${environment.apiUrl}characters/${id ?? ''}`)
      .pipe(
        map(this.handleResponse)
      );
  }

  //get random character:
  getRandomCharacter(){
    return this.http
      .get<Character[]>(`${environment.apiUrl}character/random`)
      .pipe(
        map(this.handleResponse)
      );
  }

  //get character by series:
  getCharactersBySeries(series: string){
    return this.http
      .get<Character[]>(`${environment.apiUrl}character?category=${series}`)
      .pipe(
        map(this.handleResponse)
      );
  }

  //search character by name:
  searchCharacters(name: string){
    return this.http
      .get<Character[]>(`${environment.apiUrl}character?name=${name}`)
      .pipe(
        map(this.handleResponse)
      );
  }

  //get all episodes or by Id:
  getEpisodes(id?: number){
    return this.http
      .get<Episode[]>(`${environment.apiUrl}episodes/${id ?? ''}`)
      .pipe(
        map(this.handleResponse)
      );
  }

  //get episodes by series:
  getEpisodesBySeries(series: string){
    return this.http
      .get<Episode[]>(`${environment.apiUrl}episodes?series=${series}`)
      .pipe(
        map(this.handleResponse)
      );
  }

  //get all quote or by Id:
  getQuotes(id?: number){
    return this.http
      .get<Quote[]>(`${environment.apiUrl}quotes/${id ?? ''}`)
      .pipe(
        map(this.handleResponse)
      );
  }

  //get quotes by series:
  getQuotesBySeries(series: string){
    return this.http
      .get<Quote[]>(`${environment.apiUrl}quotes?series=${series}`)
      .pipe(
        map(this.handleResponse)
      );
  }

  //get random quote:
  getRandomQuote(){
    return this.http
      .get<Quote[]>(`${environment.apiUrl}quote/random`)
      .pipe(
        map(this.handleResponse)
      );
  }

  //get quotes by author:
  getQuotesByAuthor(author: string){
    return this.http
      .get<Quote[]>(`${environment.apiUrl}quote?author=${author}`)
      .pipe(
        map(this.handleResponse)
      );
  }

  //get random quote from author:
  getRandomQuoteByAuthor(author: string){
    return this.http
      .get<Quote[]>(`${environment.apiUrl}quote/random?author=${author}`)
      .pipe(
        map(this.handleResponse)
      );
  }
 
  //get all deaths:
  getAllDeaths(){
    return this.http
      .get<Death[]>(`${environment.apiUrl}deaths`)
      .pipe(
        map(this.handleResponse)
      );
  }

  //get character death:
  getCharacterDeath(name: string){
    return this.http
      .get<Death[]>(`${environment.apiUrl}deaths?name=${name}`)
      .pipe(
        map(this.handleResponse)
      );
  }
 
  //get death Count:
  getDeathCount(){
    return this.http
      .get<DeathCount[]>(`${environment.apiUrl}death-count`)
      .pipe(
        map(this.handleResponse)
      );
  }

  //get death Count by character:
  getDeathCountByCharacter(name: string){
    return this.http
      .get<DeathCount[]>(`${environment.apiUrl}death-count?name=${name}`)
      .pipe(
        map(this.handleResponse)
      );
  }




  private handleResponse(response: any) {
    if(response.error) {
      return throwError(response.error)
    }

    return response;
  }
}
