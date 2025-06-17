import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LibraryType} from '../../types/library.types';

@Component({
  selector: 'app-library',
  imports: [CommonModule],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {
  @Input() library: LibraryType | null = null;
  @Input() closeCallback?: () => void;

  close() {
    if (this.closeCallback) {
      this.closeCallback();
    }
  }
}
