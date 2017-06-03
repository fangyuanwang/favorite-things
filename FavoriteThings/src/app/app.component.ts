import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Favorite Thing';
  favoriteColor = 'pink';
  favoriteNumber = 5;

  constructor(db: AngularFireDatabase) {

  }

  setColor(selectedColor: string): void {
    // this.favoriteColor = selectedColor;
    firebase.database().ref().child("color").set(selectedColor);
  }

  updateColor(): void {
    firebase.database().ref().child("color").once('value', 
      (snapshot: firebase.database.DataSnapshot) => { 
        this.favoriteColor = snapshot.val();
      });
  }

  setNumber(newFavoriteNumber: number): void {
    this.favoriteNumber = newFavoriteNumber;
  }

}
