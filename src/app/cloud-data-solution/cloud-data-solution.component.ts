import { Component } from '@angular/core';

@Component({
  selector: 'app-cloud-data-solution',
  templateUrl: './cloud-data-solution.component.html',
  styleUrls: ['./cloud-data-solution.component.css']
})
export class CloudDataSolutionComponent {

  sapOfferings = [


    {
      number: 1,
      title: 'Cloud Infrastructure Design',
      description: 'We create tailored cloud infrastructures that meet your specific business requirements and support scalability and growth.'
    },
    {
      number: 2,
      title: 'Data Management and Migration',
      description: 'Our services include comprehensive data management solutions, from seamless migration to ongoing management, ensuring data integrity and security.'
    },
    {
      number: 3,
      title: 'Real-Time Analytics Solutions',
      description: 'We implement advanced analytics tools that provide insights in real-time, helping you optimize operations and make informed, data-driven decisions.'
    }

  ];
  }
