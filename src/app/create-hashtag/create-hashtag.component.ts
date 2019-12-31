import { Component, OnInit } from '@angular/core';
import { HashtagService } from '../hashtag.service';

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

  constructor(private service: HashtagService) { }

  ngOnInit() {
  }

  cadastrarHashtag(){
    this.service.cadastrarHashtag(this.hashtag.nome).subscribe(
      success => {
        alert('Hashtag '+ this.hashtag.nome +  ' Cadastrada com sucesso.');
        let formulario = document.getElementsByTagName('form');
        formulario[0].reset();
      },
      error => alert('Algo de errado ocorreu')
    );
  }

}
