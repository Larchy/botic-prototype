import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-setup',
  templateUrl: './profile-setup.component.html',
  styleUrls: ['./profile-setup.component.scss']
})
export class ProfileSetupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  camImage(value) {
	  return value ? './assets/img/camera-selected.png' : './assets/img/camera-not-selected.png';
  }

}
