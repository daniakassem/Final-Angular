export interface Employee {
    id: number;
    name: string;
    position: string;
    department: string;
    salary: number;
    reportingTo?: string;  // Optional, based on your usage
    corporateLevel?: string; // Optional
    lifetime?: string; // Optional
    vacationDaysLeft?: number; // Optional
    sickDaysLeft?: number; // Optional
  }
  