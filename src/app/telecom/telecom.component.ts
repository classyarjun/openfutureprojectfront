import { Component } from '@angular/core';

interface Offering {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-telecom',
  templateUrl: './telecom.component.html',
  styleUrls: ['./telecom.component.css']
})
export class TelecomComponent {
  telecom: Offering[] = [];

  constructor() { }

  // OnInit lifecycle hook to initialize data
  ngOnInit(): void {
    // Populate the computingsoftware array with data
    this.telecom = [
      {
        number: 1,
        title: 'Network Optimization Solutions',
        description: 'Maximize network performance and reliability with advanced analytics and monitoring tools designed to enhance service delivery.'
      },
      {
        number: 2,
        title: 'Customer Experience Management',
        description: 'Transform customer interactions with personalized services and solutions that boost engagement and satisfaction.'
      },
      {
        number: 3,
        title: 'Telecom Expense Management',
        description: 'Streamline telecom expenses and optimize cost management with our comprehensive expense-tracking solutions.'
      },
      {
        number: 4,
        title: '5G Implementation Support',
        description: 'Seamlessly transition to 5G technology with our expert guidance and solutions for network deployment and integration.'
      },
      {
        number: 5,
        title: 'Fraud Management Solutions',
        description: 'Protect your business from potential threats with proactive fraud detection and prevention strategies tailored for the telecom sector.'
      },
      {
        number: 6,
        title: 'IoT Solutions for Telecom',
        description: 'Unlock new revenue streams and enhance service offerings with our Internet of Things (IoT) solutions designed for telecom operators.'
      }
    ];
  }
}

