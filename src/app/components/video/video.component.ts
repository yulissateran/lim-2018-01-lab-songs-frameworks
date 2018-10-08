import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { LastFmService} from '../../services/last-fm.service';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Input() track : any;
  @Input() urlCurrentVideo: string
  @Input() idTrackPlay: number;
  @Input() trackId: number;
  public url : string;
  

  constructor() {
    
    // this.url = this.track.urlVideo;
    // console.log(this.url)
   }

  ngOnInit() {
    // this.url = this.track.urlVideo;
    // console.log(this.url)
  }

}
