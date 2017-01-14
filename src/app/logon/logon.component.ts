import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {
  user: {
    name: string
    password: string
  } = {
    name: '',
    password: '',
  }

  constructor() { }

  ngOnInit() {
  }

}
