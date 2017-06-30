/**
 * Created by balak on 6/30/2017.
 */
export class Tweet {
  tweet: string;
  author: string;
  feedback: string;

  constructor(tweet: string, author: string) {
    this.tweet = tweet;
    this.author = author;
  }
}
