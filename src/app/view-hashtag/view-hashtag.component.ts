import { Component, OnInit } from '@angular/core';
import {HashtagsService} from "../HashtagsService.service";
import {Hashtag} from "../hashtag.model";

@Component({
  selector: 'app-view-hashtag',
  templateUrl: './view-hashtag.component.html',
  styleUrls: ['./view-hashtag.component.css']
})
export class ViewHashtagComponent implements OnInit {
  Hashtags: Hashtag[];
  loaded:boolean = false;
  constructor(private gettags : HashtagsService) { }

  ngOnInit() {
    this.gettags.getAllHashtags().subscribe(
      (response) => {
        this.Hashtags = response.json();

        this.loaded=true;
      },
      (error) => console.log(error)
    )
  }

  deleteAll() {
    console.log("Deleting everything");
    this.gettags.deleteAll().subscribe(
      (response) => console.info(response),
      (error) => console.error(error)
    );
    this.Hashtags.splice(0, this.Hashtags.length);
  }
}
