import {Component, Input, OnInit} from '@angular/core';
import {Hashtag} from "../../hashtag.model";
import {Params, Route, Router, Routes} from "@angular/router";

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {
  @Input() Hashtag: Hashtag;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  addTweet() {
    this.router.navigate(["/add-tweet"], {queryParams: {tag:  this.Hashtag.tag } })
  }
}
