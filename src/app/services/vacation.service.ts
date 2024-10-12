import { Injectable } from '@angular/core';
import { VacationRequest } from '../models/vacation.model';

@Injectable({
  providedIn: 'root'
})
export class VacationRequestService {
  private vacationRequests: VacationRequest[] = [
    {
      id: 1,
      employeeName: 'John Doe',
      duration: 5,
      salary: 2000,
      requestDate: new Date('2023-09-01'),
      status: 'Approved'
    },
    {
      id: 2,
      employeeName: 'Jane Smith',
      duration: 10,
      salary: 3000,
      requestDate: new Date('2023-09-10'),
      status: 'Pending'
    },
    {
      id: 3,
      employeeName: 'Emily Johnson',
      duration: 3,
      salary: 1500,
      requestDate: new Date('2023-09-15'),
      status: 'Declined'
    },
  ];

  constructor() {}

  getVacationRequests(): VacationRequest[] {
    return this.vacationRequests;
  }
}
