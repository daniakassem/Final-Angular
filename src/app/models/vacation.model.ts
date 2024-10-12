export interface VacationRequest {
    id: number;
    employeeName: string;
    duration: number; // duration in days
    salary: number; // salary amount
    requestDate: Date; // date of request
    status: 'Approved' | 'Pending' | 'Declined'; // status of the vacation request
  }
  