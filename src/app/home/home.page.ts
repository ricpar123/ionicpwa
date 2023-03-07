import { Component } from '@angular/core';

import { Geolocation, Position } from '@capacitor/geolocation';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 position: Position | undefined

  constructor() {}

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();

   this.position = coordinates;
  }

  async share() {
    await Share.share({
      title: 'Come and find me',
      text: `Here's my current location: 
        ${this.position?.coords.latitude}, 
        ${this.position?.coords.longitude}`,
      url: 'http://ionicacademy.com/'
    });
  }

}
