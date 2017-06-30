import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Tweet} from "../tweet.model";
import {Hashtag} from "../hashtag.model";
import {HashtagsService} from "../HashtagsService.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-add-tweet',
  templateUrl: './add-tweet.component.html',
  styleUrls: ['./add-tweet.component.css']
})
export class AddTweetComponent implements OnInit, AfterViewInit {
  Hashtags: Hashtag[];
  done: boolean = false;
  processing: boolean = false;
  selected: string;
  constructor(private hashService: HashtagsService, private thisRoute: ActivatedRoute) { }

  ngOnInit() {
    this.hashService.getAllHashtags().subscribe(
      (response) => this.Hashtags = response.json(),
      (error) => console.error(error)
    );
  }

  ngAfterViewInit() {
    if (this.thisRoute.snapshot.queryParams['tag']) {
      console.log("Query param recieved: ", this.thisRoute.snapshot.queryParams['tag']);
      this.selected = this.thisRoute.snapshot.queryParams['tag'];
    }
  }

  addTweet(form: NgForm) {
    let tweet: Tweet = new Tweet(form.value.tweet, form.value.author);
    this.processing = true;
    this.hashService.addTweet(form.value.tag, tweet).subscribe(
      (resp) => {
        this.processing = false;
        this.done = true;
        console.log(resp)
      },
      (error) => console.error(error)
    );
  }
}
