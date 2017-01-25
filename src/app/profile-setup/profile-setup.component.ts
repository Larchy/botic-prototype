import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-setup',
  templateUrl: './profile-setup.component.html',
  styleUrls: ['./profile-setup.component.scss']
})
export class ProfileSetupComponent implements OnInit {
	private cams:any;

  constructor() { }

  ngOnInit() {
	  this.cams = [
		  { active : true, img: 'camera-selected.png' },
		  { active : false, img: 'camera-not-selected.png' },
		  { active : false, img: 'camera-not-selected.png' }
	  ];
  }
  
  updateCam(cam) {
	  cam.img = cam.active ? 'camera-selected.png' : 'camera-not-selected.png';
  }

}
