import {Component} from 'angular2/core';
import {FavouriteComponent} from './favourite.component'
import {LikeComponent} from './like.component'
import {VoteComponent} from './vote.component'
import {TweetsComponent} from './tweets.component'

@Component({
    selector: 'my-app',
    template: `
      <div class="jumbotron col-lg-6">
        <div><span class="glyphicon glyphicon-star"></span>
        <favourite [is-favourite]="post.isFavourite" (change)="onFavouriteChange($event)"></favourite></div>
        <div><like [is-liked]="tweet.isLiked" [total-likes]="tweet.totalLikes"></like></div>
        <div><vote [voteCount]="vote.voteCount" [myVote]="vote.myVote" (change)="onVoteChange($event)"></vote>
      </div>
      <div>
        <tweets></tweets>
      </div>
    `,
    directives: [FavouriteComponent, LikeComponent, VoteComponent,TweetsComponent]
})
export class AppComponent {
  post = {
    title: "Title",
    isFavourite: true
  }
  
  onFavouriteChange($event) {
    console.log($event)
  }
  
  onVoteChange($event) {
    this.vote.myVote = $event.myVote
    this.vote.voteCount = $event.voteCount
  }
  
  vote = {
    voteCount: 15,
    myVote: 0
  }
  
  tweet = {
    isLiked: true,
    totalLikes: 15
  }
  
}