import { Component, signal } from '@angular/core';
import { IonApp, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-root',
  imports: [IonApp, IonContent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mobile-hello-world');
}
