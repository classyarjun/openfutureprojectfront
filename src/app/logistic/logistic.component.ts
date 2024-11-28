import { Component } from '@angular/core';
interface Offering {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-logistic',
  templateUrl: './logistic.component.html',
  styleUrls: ['./logistic.component.css']
})
export class LogisticComponent {
  logistic: Offering[] = [];

  constructor() { }

  ngOnInit(): void {
    this.logistic = [
      {
        number: 1,
        title: 'Supply Chain Management',
        description: 'Implement comprehensive supply chain solutions that ensure seamless coordination between suppliers, manufacturers the flow of goods and information.'
      },
      {
        number: 2,
        title: 'Warehouse Management Systems',
        description: 'Develop advanced warehouse management systems that enhance inventory tracking, improve order fulfillment, and maximize storage efficiency to reduce operational costs.'
      },
      {
        number: 3,
        title: 'Transportation Management',
        description: 'Utilize transportation management solutions that optimize routing, tracking, and scheduling, ensuring timely deliveries while minimizing transportation expenses.'
      },
      {
        number: 4,
        title: 'Real-Time Tracking and Visibility',
        description: 'Provide real-time tracking systems that allow businesses and customers to monitor shipments, enhancing transparency and improving customer satisfaction.'
      },
      {
        number: 5,
        title: 'Data Analytics for Decision-Making',
        description: 'Leverage data analytics to gain insights into logistics performance and demand forecasting enabling informed decision-making and strategic improvements.'
      },
      {
        number: 6,
        title: 'Integration with Third-Party Providers',
        description: 'Ensure seamless integration with third-party logistics (3PL) providers, enhancing service offerings and expanding logistics capabilities without additional overhead.'
      },

    ];
  }
}


