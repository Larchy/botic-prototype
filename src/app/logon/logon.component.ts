import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {
  user: {
    email: string
    password: string
  } = {
    email: '',
    password: '',
  }

  constructor() { }

  ngOnInit() {
  }

}
