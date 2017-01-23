import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit {
	private feeds: Array<any>;
	private name:string;
	private video: any = {id: 'tJJdBTQqwQM'};
	private baseUrl:string = 'https://www.youtube.com/embed/';
	private url:any;

  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
	  this.feeds = [
          {name: "@RichJay", id: 'tJJdBTQqwQM'},
          {name: "@MelvinJamie", id: 'dvlEaUlTEsg'},
          {name: "@AngelaJones", id: 'Mx1DxPwEz1w'},
          {name: "@DougSmith", id: 'WtH3dBbEDIE'}
	  ];

	  this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id + "?autoplay=1" + "rel=0&showinfo=0&autoplay=1");
  }

  invite() {
	  debugger;
	  // TODO: do something;
  }

  selectVideo(videoId) {
	  this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + videoId + "?autoplay=1" + "rel=0&showinfo=0&autoplay=1");
  }

}
