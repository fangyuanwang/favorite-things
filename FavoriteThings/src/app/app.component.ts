import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Favorite Thing';
  favoriteColor = 'pink';

  setColor(selectedColor: string): void {
    this.favoriteColor = selectedColor;
  }

  updateColor(): void {
    console.log('TODO: update color');
  }
}
