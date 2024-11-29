import { Component } from '@angular/core';

interface Offering {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-inshurance',
  templateUrl: './inshurance.component.html',
  styleUrls: ['./inshurance.component.css'],
})
export class InshuranceComponent {
  insurance: Offering[] = [];
  constructor() {}
  ngOnInit(): void {
    this.insurance = [
      {
        number: 1,
        title: 'Claims Management Solutions',
        description:
          'Simplify and expedite the claims process with our intelligent claims management systems. We automate workflows, improve communication, and enhance transparency.',
      },

      {
        number: 2,

        title: 'Underwriting Automation',

        description:
          'Leverage advanced analytics and AI to streamline underwriting processes. Our solutions enhance risk assessment, improve accuracy, and speed up decision-making.',
      },

      {
        number: 3,

        title: 'Customer Experience Platforms',

        description:
          'Enhance customer engagement with our user-friendly platforms that provide personalized experiences. We enable insurers to interact with clients through multiple channels, offering self-service options and proactive support.',
      },

      {
        number: 4,

        title: 'Fraud Detection and Prevention',

        description:
          'Protect your organization with our advanced fraud detection solutions. By employing machine learning and predictive analytics, we help insurers identify suspicious activities, reducing losses and improving compliance.',
      },

      {
        number: 5,

        title: 'Policy Management Systems',

        description:
          'Optimize policy administration with our comprehensive management systems. Our solutions enable insurers to manage the entire policy lifecycle—from creation to renewal—ensuring accuracy.',
      },

      {
        number: 6,

        title: 'Data Analytics and Reporting',

        description:
          'Unlock the power of data with our analytics solutions. We help insurers gain valuable insights into customer behavior, market trends, and operational efficiency.',
      },
    ];
  }
}
