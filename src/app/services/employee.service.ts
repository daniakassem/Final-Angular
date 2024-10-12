import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model'; // Ensure this import is correct
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // Sample data for employees
  private employees: Employee[] = [
    {
      id: 1,
      name: 'Ahmad Azmi',
      position: 'Junior Accounting Officer',
      department: 'Marketing Department',
      salary: 0, // Set an appropriate salary or leave as is
      reportingTo: 'Salwa Assem',
      corporateLevel: 'Level 10',
      lifetime: '2.5 Years',
      vacationDaysLeft: 14,
      sickDaysLeft: 14,
    }
  ];

  constructor() {}

  // Return the array of employees
  getEmployees(): Employee[] {
    return this.employees;
  }

  // Get employee by ID
  getEmployeeById(id: number): Employee | undefined {
    return this.employees.find(employee => employee.id === id);
  }

  // Return a single employee as an observable
  getEmployee(): Observable<Employee> {
    // For this example, return the first employee or modify as needed
    return of(this.employees[0]);
  }
}
