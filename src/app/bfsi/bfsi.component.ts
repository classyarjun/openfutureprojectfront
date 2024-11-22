import { Component } from '@angular/core';

interface Offering {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-bfsi',
  templateUrl: './bfsi.component.html',
  styleUrls: ['./bfsi.component.css']
})
export class BfsiComponent {
  bfsi: Offering[] = [];

  constructor() { }

  // OnInit lifecycle hook to initialize data
  ngOnInit(): void {
    // Populate the computingsoftware array with data
    this.bfsi = [
      {
        number: 1,
        title: 'End-to-End Claims and Underwriting Solutions',
        description: 'Streamline claims processing and underwriting with our AI/ML-powered platform for improved efficiency and accuracy.'
      },
      {
        number: 2,
        title: 'Customer Experience Platform',
        description: 'Enhance customer interactions with solutions designed to boost engagement and satisfaction across all touchpoints.'
      },
      {
        number: 3,
        title: 'Technology Management Platform',
        description: 'Optimize your IT infrastructure to ensure maximum performance and reliability.'
      },
      {
        number: 4,
        title: 'Anti-Money Laundering Solutions',
        description: 'Maintain compliance with robust solutions designed to detect and prevent suspicious activities.'
      },
      {
        number: 5,
        title: 'Low-Code Multi-Experience Development Platform',
        description: 'Accelerate application development effortlessly across devices with our low-code platform.'
      },
      {
        number: 6,
        title: 'Open API Platform for Insurers',
        description: 'Facilitate seamless integration with third-party services through our Open API platform.'
      }
    ];
  }
}
