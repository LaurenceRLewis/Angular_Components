import { Component, Input, signal, computed, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TableRow {
  id: number;
  name: string;
  email: string;
  dob: string;
  employeeID: string;
  checked: boolean;
  disabled: boolean;
}

@Component({
  selector: 'app-table-selectable',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./table-selectable.component.scss'],
  templateUrl: './table-selectable.component.html',
})
export class TableSelectableComponent implements AfterViewInit {
  @Input() disabledCheckboxes: string = '';
  @Input() defaultCheckedBoxes: string = '';

  @ViewChild('selectAllCheckbox') selectAllCheckbox!: ElementRef<HTMLInputElement>;

  private readonly initialRows: Omit<TableRow, 'checked' | 'disabled'>[] = [
    { id: 0, name: 'John Doe', email: 'john.doe@example.com', dob: '02-07-1991', employeeID: '001' },
    { id: 1, name: 'Jane Smith', email: 'jane.smith@example.com', dob: '01-05-1990', employeeID: '002' },
    { id: 2, name: 'Mike Jones', email: 'mike.jones@example.com', dob: '12-12-1985', employeeID: '003' },
    { id: 3, name: 'Sarah Jennings', email: 'sarah.jennings@example.com', dob: '06-15-1988', employeeID: '004' },
    { id: 4, name: 'Peter Parker', email: 'peter.parker@example.com', dob: '08-23-1992', employeeID: '005' },
  ];

  rows = signal<TableRow[]>([]);

  ngOnInit() {
    const disabled = this.disabledCheckboxes.split(',').map(id => parseInt(id.trim(), 10)).filter(id => !isNaN(id));
    const checked = this.defaultCheckedBoxes.split(',').map(id => parseInt(id.trim(), 10)).filter(id => !isNaN(id));

    this.rows.set(
      this.initialRows.map(row => ({
        ...row,
        checked: checked.includes(row.id) && !disabled.includes(row.id),
        disabled: disabled.includes(row.id),
      }))
    );
  }

  ngAfterViewInit() {
    this.updateIndeterminateState();
  }

  allChecked = computed(() => this.rows().every(row => row.checked || row.disabled));

  someChecked = computed(() => {
    const rows = this.rows();
    const checkable = rows.filter(row => !row.disabled);
    return checkable.some(row => row.checked) && !this.allChecked();
  });

  updateIndeterminateState() {
    if (this.selectAllCheckbox) {
      this.selectAllCheckbox.nativeElement.indeterminate = this.someChecked();
    }
  }

  onSelectAllChange(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;

    this.rows.update(rows =>
      rows.map(row => ({
        ...row,
        checked: !row.disabled && isChecked,
      }))
    );

    this.updateIndeterminateState();
  }

  onCheckboxChange(id: number, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;

    this.rows.update(rows =>
      rows.map(row =>
        row.id === id ? { ...row, checked: isChecked } : row
      )
    );

    this.updateIndeterminateState();
  }
}
