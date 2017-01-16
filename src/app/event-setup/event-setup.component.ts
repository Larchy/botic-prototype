import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-setup',
  templateUrl: './event-setup.component.html',
  styleUrls: ['./event-setup.component.css']
})
export class EventSetupComponent implements OnInit {
	event: {
		name: string
		date: string
		time: string
		cost: number
		rating: string
	} = {
		name: '',
		date: '',
		time: '',
		cost: null,
		rating: ''
	}

  constructor() { }

  ngOnInit() {
  }

}
