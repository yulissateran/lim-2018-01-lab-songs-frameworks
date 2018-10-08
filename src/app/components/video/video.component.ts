import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

import { LastFmService} from '../../services/last-fm.service';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Input() track : any;
  public url : string;
  

  constructor(
    private sanitizer: DomSanitizer,
    private lastFm :LastFmService
  ) {
    // this.getUrl()

   }
  
  
public getSantizeUrl(url : string) {
  return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}

   getUrl(){
    console.log(this.track.urlVideo)
   }
  ngOnInit() {

  }

}
