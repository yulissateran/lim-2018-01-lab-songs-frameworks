import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.css']
})
export class SearchArtistComponent implements OnInit {
  @Output() private  search : EventEmitter<any> = new EventEmitter();
  private artistSearch: string;
  constructor() { }
  // public artistName: string;
  searchArtist() {
    this.search.emit(this.artistSearch);
  }
  searchArtistKeypress(event) {
    if (event.keyCode === 13) {
      this.searchArtist()
    }
  }
  ngOnInit() {
  }

}
