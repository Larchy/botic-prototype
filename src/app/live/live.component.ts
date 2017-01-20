import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit {
	private feeds: Array<string>;

  constructor() { }

  ngOnInit() {
	  this.feeds = ["@RichJay", "@MelvinJamie", "@AngelaJones", "@DougSmith"];
  }
  
  invite() {
	  debugger;
	  // TODO: do something;
  }

}
