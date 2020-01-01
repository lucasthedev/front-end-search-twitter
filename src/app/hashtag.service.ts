import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Hashtag } from './Hashtag';

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

  urlBase: string = 'http://localhost:3001/api/';

  urlCadastrarHashtag: string = this.urlBase +'saveHashtag';

  cadastrarHashtag(hashtag: string){
    let obj = {
      'hashtag': hashtag
    }
    
    return this.http.post(this.urlCadastrarHashtag, obj, httpOptions);
  }

  urlFindHashtag: string = this.urlBase + 'getHashtags';

  listarHashtags(){
    return this.http.get<Hashtag[]>(this.urlFindHashtag, httpOptions);
  }

  urlExcluirHashtag:string = this.urlBase + 'delete/';

  excluirHashtag(id){
    return this.http.delete(this.urlExcluirHashtag + id, httpOptions);
  }

}
