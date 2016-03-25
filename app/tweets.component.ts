import {Component} from 'angular2/core'
import {TweetsService} from './tweets.service'
import {TweetComponent} from './tweet.component';

@Component({
	selector: 'tweets',
	template: `
			<ul>
				<li *ngFor="#tweet of tweets">
					<tweet 
            [name]="tweet.name"
            [handle]="tweet.handle"
            [image]="tweet.image"
            [tweet]="tweet.tweet"
            [likes]="tweet.likes"
            [liked]="tweet.liked"
          ></tweet>
				</li>
			</ul>
		`,
		providers: [TweetsService],
    directives: [TweetComponent]
})

export class TweetsComponent {
  tweets;
  
	constructor(tweetsService: TweetsService) {
		this.tweets = tweetsService.getTweets();
	}
}
