import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HashtagComponent} from "../view-hashtag/hashtag/hashtag.component";
import {HashtagsService} from "../HashtagsService.service";

@Component({
  selector: 'app-add-hashtag',
  templateUrl: './add-hashtag.component.html',
  styleUrls: ['./add-hashtag.component.css']
})
export class AddHashtagComponent implements OnInit {
  done: boolean = false;
  processing: boolean = false;

  constructor(private hashService: HashtagsService) { }

  ngOnInit() {
  }

  addHashtag(form: NgForm) {
    this.processing = true;
    this.hashService.addHashtag(form.value.tag).subscribe(
      (response) => { this.processing=false; this.done=true; console.log(response)},
      (error) => console.error(error)
    )
  }
}
