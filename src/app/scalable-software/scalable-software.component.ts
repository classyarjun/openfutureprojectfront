import { Component } from '@angular/core';

@Component({
  selector: 'app-scalable-software',
  templateUrl: './scalable-software.component.html',
  styleUrls: ['./scalable-software.component.css'],
})
export class ScalableSoftwareComponent {
  sapOfferings = [
    {
      number: 1,
      title: 'Scalable Architecture Design',
      description:
        'We create architectural frameworks that facilitate growth, allowing your software to scale seamlessly as your business expands.',
    },
    {
      number: 2,
      title: 'Microservices and Modular Solutions',
      description:
        'Our approach includes the development of microservices, enabling independent deployment and scaling of different components, enhancing flexibility and resilience.',
    },
    {
      number: 3,
      title: 'Load Balancing and Performance Optimization',
      description:
        'We implement load balancing strategies to distribute traffic efficiently, ensuring optimal performance and reliability even during peak usage periods.',
    },
  ];
}
