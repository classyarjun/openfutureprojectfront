import { Component } from '@angular/core';

@Component({
  selector: 'app-full-stack-development',
  templateUrl: './full-stack-development.component.html',
  styleUrls: ['./full-stack-development.component.css']
})
export class FullStackDevelopmentComponent {



  sapOfferings = [


    {
      number: 1,
      title: 'Front-End Development',
      description: 'We create engaging and intuitive user interfaces that enhance user experience and satisfaction across all devices.'
    },
    {
      number: 2,
      title: 'Back-End Development',
      description: 'Our back-end services include robust server-side development, ensuring secure and efficient data management for your applications.'
    },
    {
      number: 3,
      title: 'API Integrations',
      description: 'We develop and integrate APIs that connect various services and applications, enhancing functionality and interoperability for seamless user experiences.'
    }
  ];
  }


