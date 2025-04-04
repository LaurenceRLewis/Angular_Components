import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

@Component({
  standalone: true, // ✅ Mark as standalone
  selector: 'app-accordion',
  imports: [CommonModule], // ✅ Include CommonModule
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() items: { title: string; content: string }[] = [];
  @Input() groupName = 'accordion';
  @Input() multiExpand: 'Single' | 'Multiple' = 'Single';
  @Input() chevronPosition: 'left' | 'right' = 'right';
  @Input() NamedRegionContainer:
    | 'Contained in a named landmark region'
    | 'Not contained in a named landmark region' = 'Contained in a named landmark region';

  activeIndices: number[] = [];

  onTitleClick(index: number) {
    if (this.multiExpand === 'Multiple') {
      this.activeIndices = this.activeIndices.includes(index)
        ? this.activeIndices.filter(i => i !== index)
        : [...this.activeIndices, index];
    } else {
      this.activeIndices = this.activeIndices[0] === index ? [] : [index];
    }
  }

  isActive(index: number): boolean {
    return this.activeIndices.includes(index);
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    const length = this.items.length;
    const key = event.key;

    if (key === 'Enter' || key === ' ') {
      this.onTitleClick(index);
      event.preventDefault();
    } else if (key === 'ArrowDown' || key === 'ArrowUp') {
      const newIndex = key === 'ArrowDown'
        ? (index + 1) % length
        : (index - 1 + length) % length;
      document.getElementById(`${this.groupName}-heading-${newIndex}`)?.focus();
      event.preventDefault();
    } else if (key === 'Home') {
      document.getElementById(`${this.groupName}-heading-0`)?.focus();
      event.preventDefault();
    } else if (key === 'End') {
      document.getElementById(`${this.groupName}-heading-${length - 1}`)?.focus();
      event.preventDefault();
    }
  }
}
