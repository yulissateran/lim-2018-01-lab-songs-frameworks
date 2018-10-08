import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  @Input() idCurrentVideo: string;
  @Input() track: any;
  @Input() idTrackPlay: number;
  @Output() public like: EventEmitter<any> = new EventEmitter<void>();
  @Output() public notLike: EventEmitter<any> = new EventEmitter<void>();
  @Output() public playVideo: EventEmitter<any> = new EventEmitter<void>();
  public Track :any;
  constructor() {
    console.log(this.track)
  }
  ngOnInit() {
    console.log(this.track)

  }
  playTrack(event) {  
    this.playVideo.emit(event);
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
