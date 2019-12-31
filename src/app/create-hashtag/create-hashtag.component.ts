import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-hashtag',
  templateUrl: './create-hashtag.component.html',
  styleUrls: ['./create-hashtag.component.css']
})
export class CreateHashtagComponent implements OnInit {

  hashtag: any = {
    id: null,
    nome: ''
  }

  constructor() { }

  ngOnInit() {
  }

}
