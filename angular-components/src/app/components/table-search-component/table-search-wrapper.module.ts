import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableSearchComponent } from './table-search-component';

@NgModule({
  declarations: [TableSearchComponent],
  imports: [CommonModule, FormsModule],
  exports: [TableSearchComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // ✅ This allows native HTML tags like <search>
})
export class TableSearchWrapperModule {}
