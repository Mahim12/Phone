import { Component, OnInit } from '@angular/core';
import { Motion } from '@capacitor/motion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  acceleration: any = { x: 0, y: 0, z: 0 };
  rotation: any = { alpha: 0, beta: 0, gamma: 0 };

  ngOnInit() {
    this.startMotionListeners();
  }

  startMotionListeners() {
    // Listen to accelerometer changes
    Motion.addListener('accel', event => {
      this.acceleration = event.acceleration;
      console.log('Accelerometer:', this.acceleration);
    });

    // Listen to gyroscope changes
    Motion.addListener('orientation', event => {
      this.rotation = {
        alpha: event.alpha || 0,
        beta: event.beta || 0,
        gamma: event.gamma || 0
      };
      console.log('Gyroscope:', this.rotation);
    });
    
  }
}
