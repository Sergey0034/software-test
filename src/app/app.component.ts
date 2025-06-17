import { Component } from '@angular/core';
import {LibrariesComponent} from './components/libraries/libraries.component';

@Component({
  selector: 'app-root',
  imports: [LibrariesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
