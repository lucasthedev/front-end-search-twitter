import { Component, OnInit } from '@angular/core';
import { HashtagService } from '../hashtag.service';

@Component({
  selector: 'app-list-hashtags',
  templateUrl: './list-hashtags.component.html',
  styleUrls: ['./list-hashtags.component.css']
})
export class ListHashtagsComponent implements OnInit {

  hashTags: any[];

  constructor(private service: HashtagService) { }
  ngOnInit() {
    this.service.listarHashtags()
      .subscribe(dados => this.hashTags = dados);
  }

  remover(id){
    if (confirm("Deseja excluir a hashtag selecionada ?")){
      this.service.excluirHashtag(id).subscribe(
        success => {
          alert('Hashtag excluída com sucesso.');
          this.ngOnInit();
        },
        error => {
          alert('Ocorreu algum erro ao tentar exlcuir. Tente novamente.')
        }
      );
    }
  }

}
