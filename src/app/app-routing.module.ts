import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateHashtagComponent } from './create-hashtag/create-hashtag.component';
import { ListTweetsComponent } from './list-tweets/list-tweets.component';

const routes: Routes = [
  {
    path: 'cadastrarHashtag', component: CreateHashtagComponent
  },
  {
    path: 'listarTweets', component: ListTweetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
