import {Component, Input, EventEmitter, Output} from 'angular2/core'

@Component({
  selector: "favourite",
  templateUrl: 'app/favourite.template.html',
  styles: [`
    .glyphicon-star {
      color: orange;
    }
  `]
})

export class FavouriteComponent{
  @Input('is-favourite') isFavourite = false
  
  @Output() change = new EventEmitter();
  
  onClick() {
    this.isFavourite = !this.isFavourite
    this.change.emit({ newValue: this.isFavourite })
  }
}