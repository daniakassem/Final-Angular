import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-requests-count',
  templateUrl: './requests-count.component.html',
  styleUrls: ['./requests-count.component.css'],
  standalone:true,
})
export class RequestsCountComponent {
  @Input() vacationRequestsCount: number = 10;  // Vacation requests count
  @Input() leaveRequestsCount: number = 10;     // Leave requests count
}
