import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { map } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Character } from '../models/character';
import { Quote } from '../models/quote';

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

  //get random quote from author:
  getRandomQuoteByAuthor(author: string){
    console.log("test")
    author = author.replace(/\s/g, '+');
    console.log(`${environment.apiUrl}quote/random?author=${author}`)
    return this.http
      .get<Quote[]>(`${environment.apiUrl}quote/random?author=${author}`)
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
