import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-setup',
  templateUrl: './security-setup.component.html',
  styleUrls: ['./security-setup.component.scss']
})
export class SecuritySetupComponent implements OnInit {
	private PIN:Array<string>;

  constructor() { }

  ngOnInit() {
	  if(!this.PIN || this.PIN.length != 6) {
		  this.PIN = ["a","b","c","d","e","f"];
	  }
  }

}
