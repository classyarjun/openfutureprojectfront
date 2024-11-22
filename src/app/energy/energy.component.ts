import { Component } from '@angular/core';

interface Offering {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.css']
})
export class EnergyComponent {
  energy: Offering[] = [];

  constructor() { }

  // OnInit lifecycle hook to initialize data
  ngOnInit(): void {
    // Populate the computingsoftware array with data
    this.energy = [
      {
        number: 1,
        title: 'Renewable Energy Integration',
        description: 'Harness the power of renewable sources with our comprehensive solutions that facilitate the integration of solar, wind, and other sustainable energy systems into existing infrastructures.'
      },
      {
        number: 2,
        title: 'Smart Grid Technology',
        description: 'Enhance energy distribution and consumption with our smart grid solutions, improve reliability, and enable real-time monitoring and management.'

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

