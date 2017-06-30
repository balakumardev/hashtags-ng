import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewHashtagComponent } from './view-hashtag/view-hashtag.component';
import {RouterModule, Routes} from "@angular/router";
import { HashtagComponent } from './view-hashtag/hashtag/hashtag.component';
import {HashtagsService} from "./HashtagsService.service";
import {HttpModule, JsonpModule} from "@angular/http";
import { AddTweetComponent } from './add-tweet/add-tweet.component';
import {FormsModule} from "@angular/forms";
import { AddHashtagComponent } from './add-hashtag/add-hashtag.component';
import {GraphComponent} from "./graph/graph.component";

const routerLinks: Routes = [
  { path:"", component:ViewHashtagComponent },
  { path:"add-tweet", component:AddTweetComponent},
  { path:"add-hashtag", component: AddHashtagComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ViewHashtagComponent,
    HashtagComponent,
    AddTweetComponent,
    AddHashtagComponent,
    GraphComponent
  ],
  imports: [
    JsonpModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routerLinks)
  ],
  providers: [HashtagsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
