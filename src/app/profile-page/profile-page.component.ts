// src/app/components/profile/profile.component.ts
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-profile',
  templateUrl: '../profile-page/profile-page.component.html',
  styleUrls: ['../profile-page/profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  employee!: Employee;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    // Fetch the employee details from the service
    this.employeeService.getEmployee().subscribe((data: Employee) => {
      this.employee = data;
    });
  }
}
