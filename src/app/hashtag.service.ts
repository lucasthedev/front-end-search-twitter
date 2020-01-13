import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Hashtag } from './Hashtag';



@Injectable({
  providedIn: 'root'
})
export class HashtagService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      'hashtags': ''
    })
  };

  constructor(private http: HttpClient) { }

  urlBase: string = 'http://localhost:3001/api/';

  urlCadastrarHashtag: string = this.urlBase +'saveHashtag';

  cadastrarHashtag(hashtag: string){
    let obj = {
      'hashtag': hashtag
    }
    
    return this.http.post(this.urlCadastrarHashtag, obj, this.httpOptions);
  }

  urlFindHashtag: string = this.urlBase + 'getHashtags';

  listarHashtags(){
    return this.http.get<Hashtag[]>(this.urlFindHashtag, this.httpOptions);
  }

  urlExcluirHashtag:string = this.urlBase + 'delete/';

  excluirHashtag(id){
    return this.http.delete(this.urlExcluirHashtag + id, this.httpOptions);
  }

  urlRetornaTweets: string = this.urlBase + 'getTweets';

  retornarTweets(hashtags){

    var cabecalho = '';
    hashtags.forEach(element => {
      cabecalho += element.hashtag;
    });

    let myHttpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'hashtags': cabecalho
      })
    };

    return this.http.get(this.urlRetornaTweets, myHttpOptions);
  }

}
