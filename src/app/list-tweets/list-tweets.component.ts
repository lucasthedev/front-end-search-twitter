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
      }, 8000);
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
        this.Tweets = dados;
        this.Tweets = this.Tweets.statuses;
      },
      error =>{
        console.log("Deu erro");
      }
    )
  }

  

}
