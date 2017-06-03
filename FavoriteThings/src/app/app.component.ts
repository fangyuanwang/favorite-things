import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

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
    this.favoriteColor = selectedColor;
  }

  updateColor(): void {
    console.log('TODO: update color');
  }

  setNumber(newFavoriteNumber: number): void {
    this.favoriteNumber = newFavoriteNumber;
  }

}
