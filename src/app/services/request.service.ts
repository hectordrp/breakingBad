import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { map } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Character } from '../models/character';

@Injectable({ providedIn: 'root'})
export class RequestService {

  constructor(protected http: HttpClient) { }

  getCharacters(id?: Number){
    return this.http
      .get<Character[]>(environment.apiUrl+'characters/'+ (id ?? ''))
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
