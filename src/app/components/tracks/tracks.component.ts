import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  @Input() track: any;
  @Output() public like : EventEmitter<any> = new EventEmitter();
  @Output() public notLike = new EventEmitter<void>();
 
  constructor() { 
  }
  ngOnInit() {
  }
  liked(id) {
    console.log(id);
    this.like.emit(id);
  }
  notLiked (id) {
    console.log(id);
    this.notLike.emit(id);
  }
}
