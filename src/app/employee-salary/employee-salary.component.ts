import { Component, OnInit } from '@angular/core';
import { Employees } from './employees';

@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.component.html',
  styleUrls: ['./employee-salary.component.css']
})
export class EmployeeSalaryComponent implements OnInit {



  employeeList: Employees[] = [
    new Employees("A2211", "Stephen", 10000, "Analyst", 7),
    new Employees("A3312", "Tony", 5000, "Development Trainee", 7),
    new Employees("Z8197", "Alia", 14000, "Human Resources", 8),
    new Employees("C8787", "Martin", 15000, "Project Management", 4),
    new Employees("A3334", "Joe", 24000, "Development", 7),
    new Employees("C8228", "Yoko", 12000, "Management", 4),
    new Employees("C4228", "Luke", 9400, "Customer service", 8),

  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
