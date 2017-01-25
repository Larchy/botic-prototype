import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sync',
  templateUrl: './sync.component.html',
  styleUrls: ['./sync.component.scss']
})
export class SyncComponent implements OnInit {
	private settings:any;

  constructor() { }

  ngOnInit() {
	  this.settings = {
		  video : { active: 'true', img: 'camera-selected.png'},
		  sound : { active: 'false', img: 'sounds-not-selected.png'},
		  blueTooth : { active: 'true', img: 'blue-tooth-selected.png'},
	  }
  }
  
  updateVideo() {
	  this.settings.video.img = this.settings.video.active ? 'camera-selected.png' : 'camera-not-selected.png'; 
  }
  
  updateSound() {
	  this.settings.sound.img = this.settings.sound.active ? 'sounds-selected.png' : 'sounds-not-selected.png'; 
  }
  
  updateBlueTooth() {
	  this.settings.blueTooth.img = this.settings.blueTooth.active ? 'blue-tooth-selected.png' : 'blue-tooth-not-selected.png'; 
  }

}
