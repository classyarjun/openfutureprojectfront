import { Component } from '@angular/core';

interface Offering {
  number: number;
  title: string;
  description: string;
}
@Component({
  selector: 'app-agriculture',
  templateUrl: './agriculture.component.html',
  styleUrls: ['./agriculture.component.css']
})
export class AgricultureComponent {

  agriculture: Offering[] = [];

  constructor() {}

  ngOnInit(): void {
    this.agriculture = [
      {
        number: 1,
        title: 'Precision Farming',
        description: 'Leverage data analytics and IoT devices to monitor crop health and soil conditions. Our precision farming solutions help farmers make informed decisions and resulting in higher yields.'
      },
      {
        number: 2,
        title: 'Supply Chain Management',
        description: 'Streamline the agricultural supply chain with robust solutions that track products from farm to market. Our technology ensures transparency, timely deliveries and improving profitability.'
      },
      {
        number: 3,
        title: 'Smart Irrigation Systems',
        description: 'Implement automated irrigation systems that optimize water usage based on real-time data. Our smart irrigation solutions promote water conservation while ensuring crops receive the right amount of moisture.'
      },
      {
        number: 4,
        title: 'Farm Management Software',
        description: 'Utilize comprehensive farm management platforms that integrate various agricultural processes, from planting to harvesting. Our software helps farmers track performance and analyze data for continuous improvement.'
      },
      {
        number: 5,
        title: 'Market Access and E-commerce',
        description: 'Enhance market access for farmers through e-commerce platforms that connect them directly with consumers. Our solutions empower farmers to sell their products online, ensuring greater market reach.'
      },
      {
        number: 6,
        title: 'Drones and Aerial Imaging',
        description: 'Utilize drones for aerial imaging and surveillance of crops. Our drone technology provides valuable insights into crop health, pest infestations and enabling proactive management.'
      }
    ];
  }
}
