import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { type VacationRequest } from '../../../models/vacation.model'; // Adjust the path if needed


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [CommonModule],  // Add CommonModule here
})
export class CardComponent {
  @Input({required:true}) data!: VacationRequest; // Strongly typed input
  @Output() select = new EventEmitter<void>(); // Output event

  onSelect() {
    this.select.emit(); // Emit event when card is selected
  }
}
