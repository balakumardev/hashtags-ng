import {Tweet} from "./tweet.model";
/**
 * Created by balak on 6/30/2017.
 */
export class Hashtag {
  tag: string;
  positive: number;
  negative: number;
  neutral: number;
  tweetList: Tweet[];


  constructor(tag: string, positive: number, negative: number, neutral: number, tweetList: Tweet[]) {
    this.tag = tag;
    this.positive = positive;
    this.negative = negative;
    this.neutral = neutral;
    this.tweetList = tweetList;
  }

}
