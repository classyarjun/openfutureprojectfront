import { Component } from '@angular/core';

@Component({
  selector: 'app-sap',
  templateUrl: './sap.component.html',
  styleUrls: ['./sap.component.css']
})
export class SapComponent {

  sapOfferings = [
    {
      number: 1,
      title: 'Enterprise Resource Planning (ERP)',
      description: 'Cloud ERP public and private editions, tailored to streamline operations and drive efficiencies.'
    },
    {
      number: 2,
      title: 'Financial Management',
      description: 'Financial planning and analysis, tax and treasury management, accounting, and governance risk compliance solutions.'
    },
    {
      number: 3,
      title: 'CRM and Customer Experience',
      description: 'Comprehensive offerings in customer data, marketing, commerce, and sales, ensuring an enhanced customer journey.'
    },
    {
      number: 4,
      title: 'Financial Management',
      description: 'Financial planning and analysis, tax and treasury management, accounting, and governance risk compliance solutions.'
    },
    {
      number: 5,
      title: 'Supply Chain Management',
      description: 'Planning, logistics, manufacturing, and lifecycle management services to enhance operational performance.'
    },
    {
      number: 6,
      title: 'Human Capital Management (HCM)',
      description: 'Employee experience management, Core HR, payroll, and talent management to drive workforce efficiency and engagement.'
    },
   
  ];
}
 
