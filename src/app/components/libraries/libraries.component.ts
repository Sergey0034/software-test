import {Component, OnInit, signal} from '@angular/core';
import {LibrariesService} from '../../services/libraries.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LibraryComponent} from '../library/library.component';
import {LibraryType} from '../../types/library.types';

@Component({
  selector: 'app-libraries',
  imports: [CommonModule, FormsModule, LibraryComponent],
  templateUrl: './libraries.component.html',
  styleUrls: ['./libraries.component.scss']
})
export class LibrariesComponent implements OnInit {

  libraries = signal<LibraryType[]>([]);
  filterText = signal<string>('');
  selectedLibrary = signal<LibraryType | null>(null);
  constructor(
    private librariesService: LibrariesService) { }

  selectLibrary(library: LibraryType) {
    this.selectedLibrary.set(library);
  }

  clearSelection = () => {
    this.selectedLibrary.set(null);
  }

  filteredLibraries() {
    const lower = this.filterText().toLowerCase();
    this.libraries.set(this.libraries().filter(library =>
      library.FullName?.toLowerCase().includes(lower)
    ));

  }

  loadLibraries() {
    if (this.filterText()) {
      this.filteredLibraries()
    } else {
      this.libraries.set(this.librariesService.getLibraries())
    }

  }

  ngOnInit() {
    this.libraries.set(this.librariesService.getLibraries())
  }

  highlightWrapper(text: string, filterText: string): string  {
    if (!filterText) return text;
    const regex = new RegExp(`(${filterText})`, 'gi');
    return text.replace(regex, `<span class="highlight">$1</span>`);
  }
}
