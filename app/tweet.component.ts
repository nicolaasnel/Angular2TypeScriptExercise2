import {Component, Input} from 'angular2/core'
import {LikeComponent} from './like.component';

@Component({
	selector: 'tweet',
	template: `
      <div class="media">
        <div class="media-left">
          <a href="#">
            <img class="media-object img-rounded" [src]="image">
          </a>
        </div>
        <div class="media-body">
          <h4 class="media-heading">{{name}}<span class="handle"> {{handle}}</span></h4>
          <div>{{tweet}}</div>
          <like [total-likes]="likes" [is-liked]="liked"></like>
        </div>
      </div>
		`,
    directives: [LikeComponent],
    styles: [`
    .handle {
      color: #ccc;
    }
  `]
})

export class TweetComponent{
  @Input() name = ""
  @Input() handle = ""
  @Input() tweet = ""
  @Input() likes = ""
  @Input() image = ""
  @Input() liked = ""
  
}
