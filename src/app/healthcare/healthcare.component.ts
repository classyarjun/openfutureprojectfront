import { Component } from '@angular/core';

interface Offering {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-healthcare',
  templateUrl: './healthcare.component.html',
  styleUrls: ['./healthcare.component.css']
})
export class HealthcareComponent {
  healthcare: Offering[] = [];

  constructor() { }

  // OnInit lifecycle hook to initialize data
  ngOnInit(): void {
    // Populate the computingsoftware array with data
    this.healthcare = [
      {
        number: 1,
        title: 'Electronic Health Records (EHR) Systems',
        description: 'Implement robust EHR solutions that enable healthcare providers to manage patient records efficiently, ensuring easy access to critical information and enhancing collaboration across care teams.'
      },
      {
        number: 2,
        title: 'Telemedicine Platforms',
        description: 'Expand access to healthcare services with our user-friendly telemedicine solutions that facilitate remote consultations, allowing patients to connect with healthcare professionals.'

      },
      {
        number: 3,
        title: 'Energy Management Systems',
        description: 'Maximize energy efficiency with our advanced management systems that provide insights into energy usage, identify savings opportunities, and facilitate informed decision-making.'
      },
      {
        number: 4,
        title: 'Battery Storage Solutions',
        description: 'Ensure energy reliability and sustainability with our cutting-edge battery storage technologies that enable effective energy storage and distribution, enhancing resilience.'
      },
      {
        number: 5,
        title: 'Electric Vehicle (EV) Infrastructure',
        description: 'Support the transition to electric mobility with our comprehensive EV charging solutions that promote the adoption of electric vehicles and reduce carbon emissions.'
      },
      {
        number: 6,
        title: 'Energy Efficiency Consulting',
        description: 'Benefit from our expert consulting services that assess energy consumption, identify inefficiencies and implement strategies to reduce costs and improve sustainability.'
      }
    ];
  }
}
