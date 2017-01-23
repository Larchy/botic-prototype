import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-host-view',
  templateUrl: './host-view.component.html',
  styleUrls: ['./host-view.component.scss']
})
export class HostViewComponent implements OnInit {
  @ViewChild('video') video:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let _video=this.video.nativeElement;
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          _video.src = window.URL.createObjectURL(stream);
          _video.play();
        })
    }

  }
}
