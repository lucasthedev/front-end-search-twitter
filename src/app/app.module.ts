import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateHashtagComponent } from './create-hashtag/create-hashtag.component';
import { ListHashtagsComponent } from './list-hashtags/list-hashtags.component';
import { ListTweetsComponent } from './list-tweets/list-tweets.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateHashtagComponent,
    ListHashtagsComponent,
    ListTweetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
