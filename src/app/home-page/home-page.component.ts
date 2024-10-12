import { Component, OnInit  } from '@angular/core';
import { RequestsCountComponent } from '../components/shared/requests-count/requests-count.component';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
//import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-home-page',
  standalone:true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports:[RequestsCountComponent,ImageSliderComponent]
  
})
export class HomeComponent {
  vacationRequestsCount: number = 5;  // Example data
  leaveRequestsCount: number = 3;   
  employee!: Employee;  // Example data


  constructor(private employeeService: EmployeeService) {}
  ngOnInit(): void {
    // Fetch the employee data on component initialization
    this.employeeService.getEmployee().subscribe((employeeData: Employee) => {
      this.employee = { ...employeeData }; // Use pure function by spreading data into a new object
    });
}
}
