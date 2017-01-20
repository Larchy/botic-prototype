import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.scss']
})
export class LogonComponent implements OnInit {
  user: {
    name: string
    password: string
  } = {
    name: '',
    password: '',
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login () {
	  this.router.navigateByUrl(`/profile`)
  }

}
