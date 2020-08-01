import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreakingBadService {

  constructor(private _http: HttpClient) { }

  BASE_URL = "https://www.breakingbadapi.com/api/";

  getAllCharacters(): Observable<any>{
    return this._http.get(`${this.BASE_URL}characters`)
      .pipe(
        map(res =>{
          return res;
        }, err=>{
          return err
        })
      );
  }

  getDetailCharacter(id: string): Observable<any>{
    return this._http.get(`${this.BASE_URL}characters/${id}`)
      .pipe(
        map(res=>{
          return res;
        }, err=>{
          return err;
        })
      )
  }
}
