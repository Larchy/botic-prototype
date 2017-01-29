import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bank-info',
  templateUrl: './bank-info.component.html',
  styleUrls: ['./bank-info.component.scss']
})
export class BankInfoComponent implements OnInit {
  @ViewChild('video') video:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  // ngAfterViewInit() {
  //   let _video=this.video.nativeElement;
  //   if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  //     navigator.mediaDevices.getUserMedia({ video: true })
  //       .then(stream => {
  //         _video.src = window.URL.createObjectURL(stream);
  //         _video.play();
  //       })
  //   }
  // }

  takePic(video) {
    // if (video.parentNode) {
    //   let c = document.createElement('canvas');
    //   c.width = video.videoWidth;
    //   c.height = video.videoHeight;
    //   c.getContext('2d').drawImage(video, 0, 0);
    //   c.toBlob((blob) => {
    //     let url = URL.createObjectURL(blob);
    //     let img = new Image();
    //     img.style.width = "100%";
    //     img.onload = function () {
    //       URL.revokeObjectURL(url);
    //     };
    //     img.src = url;
    //     URL.revokeObjectURL(video.src);
    //     video.parentNode.appendChild(img);
    //     video.parentNode.removeChild(video);
    //   });
    // }
  }
}
