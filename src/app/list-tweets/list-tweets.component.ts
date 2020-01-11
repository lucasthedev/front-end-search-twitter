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
  Tags: any;

  ngOnInit() {
    this.buscarHashtags();
  }

  buscarHashtags(){
    this.service.listarHashtags().subscribe(
      dados => {
        this.Hashtags = dados;
        this.retornarTweets();
      }
    );
  }

  

  retornarTweets(){
    this.service.retornarTweets(this.Hashtags).subscribe(
      dados => {
        console.log('SUCESSO')
        console.log(dados);
      },
      error =>{
        console.log("Deu erro");
      }
    )
  }

  

}
