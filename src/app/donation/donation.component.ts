import { Component, OnInit, trigger, transition, style, animate } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss'],
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
export class DonationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
