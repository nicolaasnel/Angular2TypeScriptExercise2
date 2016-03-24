import {Component, Input} from 'angular2/core'

@Component({
  selector: "like",
  template: `
    <span 
      class="glyphicon glyphicon-heart"
      [class.highlighted]="isLiked"
      (click)="onClick()">
    </span> {{ totalLikes }}
  `,
  styles: [`
    .glyphicon-heart {
      cursor: pointer;
      color: #ccc;
    }
    
    .highlighted {
      color: deeppink;
    }
  `]
})

export class LikeComponent{
  @Input('is-liked')    isLiked = false
  @Input('total-likes') totalLikes = 0
  
  onClick() {
    this.isLiked = !this.isLiked
    this.totalLikes += this.isLiked ? 1 : -1
  }
}