import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { HighlightSearchPipe } from '../highlight.pipe';
import { VacationRequestService } from '../services/vacation.service';
import { AppModule } from "../app.module"; // Ensure this service is imported and utilized
//import { PagerComponent } from '../components/shared/pager/pager.component'; // Remove this import if using Option A

@Component({
  selector: 'app-employee-request',
  templateUrl: '../vacation-request/vacation-request.component.html',
  styleUrls: ['../vacation-request/vacation-request.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, AppModule] // Remove PagerComponent here if using Option A
 // Remove PagerComponent here if using Option A
})
export class VacationRequestsComponent implements OnInit {
  searchTerm: string = '';
  selectAll: boolean = false;
  vacationRequests: any[] = [];
  filteredRequests: any[] = [];
  style: { boxShadow?: string } = {};

  constructor(private vacationRequestService: VacationRequestService) {} // Inject the service

  ngOnInit() {
    this.vacationRequests = this.vacationRequestService.getVacationRequests().slice(0, 9); // Call the service correctly
    this.filteredRequests = [...this.vacationRequests];
  }

  filterRequests() {
    const term = this.searchTerm.toLowerCase();
    this.filteredRequests = this.vacationRequests.filter((request) => {
      return (
        request.name.toLowerCase().includes(term) ||
        request.duration.toLowerCase().includes(term) ||
        request.salary.toString().includes(term)
      );
    });
  }

  toggleSelectAll() {
    this.selectAll = !this.selectAll;
  }
}
