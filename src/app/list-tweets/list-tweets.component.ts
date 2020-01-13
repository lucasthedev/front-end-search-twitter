import { Component, OnInit } from '@angular/core';
import { HashtagService } from '../hashtag.service';

declare var getTweets: any;
@Component({
  selector: 'app-list-tweets',
  templateUrl: './list-tweets.component.html',
  styleUrls: ['./list-tweets.component.css']
})


export class ListTweetsComponent implements OnInit {

  constructor(private service: HashtagService) { }

  Hashtags: any;
  Tweets: any;

  ngOnInit() {
    this.buscarHashtags();
    setInterval(() => {
      this.buscarHashtags(); 
      }, 10000);
  }

  buscarHashtags(){
    this.service.listarHashtags().subscribe(
      dados => {
        this.Hashtags = dados;
        if(this.Hashtags == ''){
          alert('Não existem Hashtags a serem filtradas. Favor cadastrá-las.');
          return;
        }
        this.retornarTweets();
      }
    );
  }

  retornarTweets(){
    this.service.retornarTweets(this.Hashtags).subscribe(
      dados => {
        console.log('SUCESSO')
        console.log(dados);
        this.Tweets = dados;
        console.log('VEIO OS DADOS');
        console.log(this.Tweets);
        console.log(this.Tweets.statuses[0].text);
      },
      error =>{
        console.log("Deu erro");
      }
    )
  }

  

}
