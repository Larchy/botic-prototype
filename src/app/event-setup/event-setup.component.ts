import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-setup',
  templateUrl: './event-setup.component.html',
  styleUrls: ['./event-setup.component.scss']
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
		date: 'Jan 22, 2016',
		time: '10:30',
		cost: null,
		rating: ''
	}

  constructor() { }

  ngOnInit() {
  }

}
