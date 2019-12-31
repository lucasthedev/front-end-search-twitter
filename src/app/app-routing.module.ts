import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateHashtagComponent } from './create-hashtag/create-hashtag.component';

const routes: Routes = [
  {
    path: 'cadastrarHashtag', component: CreateHashtagComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
