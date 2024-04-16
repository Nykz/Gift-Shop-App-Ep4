import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, arrowBackOutline, bagHandle, bagHandleOutline, remove, star, ticketOutline, trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({
      star,
      bagHandleOutline,
      bagHandle,
      trashOutline,
      add,
      remove,
      arrowBackOutline,
      ticketOutline
    });
  }
}
