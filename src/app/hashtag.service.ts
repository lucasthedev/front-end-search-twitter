import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': '',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HashtagService {

  constructor(private http: HttpClient) { }

  urlCadastrarHashtag: string = 'http://localhost:3001/api/saveHashtag';

  cadastrarHashtag(hashtag: string){
    let obj = {
      'hashtag': hashtag
    }
    
    return this.http.post(this.urlCadastrarHashtag, obj, httpOptions);
  }

}
