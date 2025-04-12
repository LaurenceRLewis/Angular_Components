import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import tableSearchData from './table-search-data';
import ariaAnnounce from "../../../assets/scripts/aria-announce";

interface TableItem {
  givenName: string;
  lastName: string;
  mobileNumber: string;
  id: string;
}

@Component({
  selector: 'app-table-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table-search-component.html',
  styleUrls: ['./table-search-component.scss'],
})
export class TableSearchComponent {
  @Input() containerRole: string | undefined = 'search';
  @Input() inputType: 'search' | 'text' = 'search';
  @Input() inputRole: string | undefined;

  searchTextVal = '';
  isInputEmpty = false;
  allResults: TableItem[] = tableSearchData;
  searchResults: TableItem[] = [...this.allResults];

  inputRef?: HTMLInputElement;

  onSearch(): void {
    const value = this.searchTextVal.trim();
    if (!value) {
      this.isInputEmpty = true;
      this.inputRef?.focus();
      return;
    }

    const filtered = this.allResults.filter(
      (item) =>
        item.id.includes(value) ||
        item.givenName.toLowerCase().includes(value.toLowerCase()) ||
        item.lastName.toLowerCase().includes(value.toLowerCase())
    );

    this.searchResults = filtered;
    this.isInputEmpty = false;
    this.inputRef?.focus();
    ariaAnnounce(`Showing ${filtered.length} of ${this.allResults.length} table rows.`);
  }

  onClear(): void {
    this.searchTextVal = '';
    this.searchResults = [...this.allResults];
    this.isInputEmpty = false;
    this.inputRef?.focus();
    ariaAnnounce(`Showing all ${this.allResults.length} table rows.`);
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onSearch();
    }
  }

  onInputChange(): void {
    this.isInputEmpty = false;
    if (!this.searchTextVal.trim()) {
      this.searchResults = [...this.allResults];
    }
  }

  bindInput(el: HTMLInputElement): void {
    this.inputRef = el;
  }
}
