import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-sortable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-sortable.component.html',
  styleUrls: ['./table-sortable.component.scss']
})
export class TableSortableComponent {
  @Input() sortable: 'Sort' | "Don't Sort" = 'Sort';
  @Input() includeScope = true;
  @Input() addRoleStatus: 'Status Role' | 'No Role' = 'No Role';
  @Input() iconVisibility: 'Show icons' | 'Show on hover / focus' = 'Show on hover / focus';
  @Input() customCaptionText = 'Table sorted by, ';
  @Input() initialSortColumnID: number | null = null;
  @Input() ariaDescription = 'Sortable column';
  @Input() includeAriaDescription = true;
  @Input() showDescriptionAll: 'Yes' | 'No' = 'No';

  headers = [
    'Priority',
    'Ticket ID',
    'Project',
    'Description',
    'Status',
    'Location',
    'Assigned To',
    'Due Date',
    'Manager'
  ];

  tableData = signal<string[][]>([
    ['P4', 'TNC000131015', 'Alok Nagar', 'Infrastructure Upgrade', 'In Progress', 'Chennai', 'Sampark Technologies', '30 Aug 2022 10am', 'Rahul Varma'],
    ['P3', 'TNC000119453', 'Pratap Enclave', 'Network Expansion', 'Completed', 'Kolkata', 'FastNet Communications', '13 Jul 2022 3pm', 'Aditi Chatterjee'],
    ['P2', 'TNC000254981', 'Kima', 'Database migration', 'In Progress', 'London', 'Michael Brown', '18 Oct 2022 9am', 'David Johnson'],
    ['P1', 'TNC000325789', 'Zara', 'Frontend refactoring', 'Not Started', 'Tokyo', 'Lisa White', '10 Nov 2022 11am', 'Emily Green'],
    ['P4', 'TNC000411568', 'Xeno', 'Backend integration', 'Completed', 'Sydney', 'Robert Taylor', '22 Dec 2022 3pm', 'William Wilson']
  ]);

  sortedColumn = signal<{ index: number | null; ascending: boolean }>({ index: null, ascending: true });
  showChevron = signal<number>(1);
  isTableSorted = signal(false);

  ngOnInit() {
    if (this.initialSortColumnID !== null) {
      this.sortColumn(this.initialSortColumnID, true);
    }
  }

  sortColumn(index: number, forceAsc = false) {
    const current = this.sortedColumn();
    const ascending = current.index === index ? !current.ascending : forceAsc;

    const compareFn = this.comparer(index, ascending);
    const sorted = [...this.tableData()].sort(compareFn);
    this.tableData.set(sorted);
    this.sortedColumn.set({ index, ascending });
    this.showChevron.set(index);
    this.isTableSorted.set(true);
  }

  comparer(idx: number, asc: boolean) {
    return (a: string[], b: string[]) => {
      const v1 = a[idx] || '';
      const v2 = b[idx] || '';
      const val1 = asc ? v1 : v2;
      const val2 = asc ? v2 : v1;

      if (!isNaN(+val1) && !isNaN(+val2)) return +val1 - +val2;
      return val1.toString().localeCompare(val2.toString());
    };
  }

  getSortState(index: number): 'ascending' | 'descending' | 'none' {
    const current = this.sortedColumn();
    if (current.index !== index) return 'none';
    return current.ascending ? 'ascending' : 'descending';
  }

  getChevronClass(index: number): string {
    const current = this.sortedColumn();
    const visible = this.iconVisibility === 'Show icons' || this.showChevron() === index;
    const direction = current.index === index
      ? current.ascending
        ? 'chevronUp'
        : 'chevronDown'
      : 'sortNone';
    return `${visible ? 'chevronIsVisible' : ''} ${direction} ${this.iconVisibility === 'Show on hover / focus' ? 'chevronHoverFocus' : ''}`;
  }

  getSanitizedId(header: string, index: number): string {
    return header.toLowerCase().replace(/[\s]+/g, '-') + '-' + index;
  }
}
