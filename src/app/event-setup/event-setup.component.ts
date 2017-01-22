import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

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
	
	private name:string;
	private video: any = {id: 'tJJdBTQqwQM'};
	private baseUrl:string = 'https://www.youtube.com/embed/';
	private url:any;

	constructor(private sanitizer:DomSanitizer) { }

	ngOnInit() {
		this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id);  
	}

}
