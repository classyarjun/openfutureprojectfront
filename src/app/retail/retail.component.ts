import { Component } from '@angular/core';
interface Offering {
  number: number;
  title: string;
  description: string;
}


@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.css']
})
export class RetailComponent {
  retail: Offering[] = [];

  constructor() { }

  // OnInit lifecycle hook to initialize data
  ngOnInit(): void {
    // Populate the computingsoftware array with data
    this.retail = [
      {
        number: 1,
        title: 'E-Commerce Development',
        description: 'Create robust and user-friendly e-commerce platforms that facilitate seamless online shopping experiences, driving sales and customer loyalty.'
      },
      {
        number: 2,
        title: 'Point of Sale (POS) Systems',
        description: 'Implement advanced POS solutions that integrate inventory management,sales tracking, and customer relationship management to optimize store operations.'
      },
      {
        number: 3,
        title: 'Omni-Channel Retailing',
        description: 'Deliver a consistent shopping experience across all channels, allowing customers to engage with your brand through in-store, online, and mobile platforms.'
      },
      {
        number: 4,
        title: 'Customer Relationship Management (CRM)',
        description: 'Utilize CRM systems to manage customer interactions, personalize marketing efforts, and foster long-term relationships that drive repeat business.'
      },
      {
        number: 5,
        title: 'Data Analytics for Retail Insights',
        description: 'Leverage data analytics to gain valuable insights into customer behavior, inventory trends, and sales performance, enabling informed decision-making.'
      },
      {
        number: 6,
        title: ' Supply Chain Optimization',
        description: 'Enhance supply chain efficiency with solutions that improve inventory management, demand forecasting, and logistics, ensuring timely product availability.'
      }
    ];
  }
}



