import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent {
  @Input() currentPage!: number; // Current page number
  @Input() totalPages!: number; // Total number of pages
  @Output() pageChange = new EventEmitter<number>(); // Output event

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return; // Ensure valid page
    this.pageChange.emit(page); // Emit the new page number
  }
}
