import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Tweet} from "./tweet.model";
import {Hashtag} from "./hashtag.model";
/**
 * Created by balak on 6/30/2017.
 */
@Injectable()
export class HashtagsService {
  constructor(private http: Http) {  }

  getAllHashtags() {
    return this.http.get("http://localhost:8080/hashtags");
  }

  addTweet(tag: string, tweet: Tweet) {
    return this.http.post("http://localhost:8080/hashtags/"+tag+"/tweets/add", tweet);
  }

  addHashtag(tag: string) {
    return this.http.post("http://localhost:8080/hashtags/add", new Hashtag(tag, 0, 0, 0, null));
  }

  deleteAll() {
    return this.http.get("http://localhost:8080/hashtags/deleteAll");
  }
}
