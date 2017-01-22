import { Component, OnInit, trigger, transition, style, animate } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.scss'],
  animations: [
    trigger(
      'myAnimation', [
        transition(':enter', [
          style({transform: 'translateX(-100%)', opacity: 0}),
          animate('250ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', 'opacity': 1}),
          animate('250ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
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
	  this.router.navigateByUrl('/profile')
  }

  signup () {
    this.router.navigateByUrl('/security')
  }

}
