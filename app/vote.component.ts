import {Component, Input, EventEmitter, Output} from 'angular2/core'

@Component({
  selector: "vote",
  templateUrl: "app/vote.template.html",
  styles: [`
    .glyphicon {
      color: #ccc;
    }
    
    .vote-button {
      cursor: pointer;
    }
    
    .highlighted {
      color: orange;
    }
  `]
})

export class VoteComponent{
  @Input('voteCount') totalVotes = 0
  @Input()            myVote     = 0
  
  lastVote = this.myVote
  
  @Output() vote = new EventEmitter();
  
  onClick(thisVote) {
    this.myVote = thisVote
    if (this.lastVote < this.myVote) {
      this.totalVotes++
      this.myVote = this.lastVote += thisVote
    }
    else if (this.lastVote > this.myVote) {
      this.totalVotes--
      this.myVote = this.lastVote += thisVote
    }
    this.lastVote = this.myVote
    this.vote.emit({ voteCount: this.totalVotes, myVote: this.myVote })
  }
}