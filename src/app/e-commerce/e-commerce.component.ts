import { Component } from '@angular/core';

interface Offering {
  number: number;
  title: string;
  description: string;
}
@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css']
})
export class ECommerceComponent {

  eCommerce: Offering[] = [];

  constructor() {}

  // OnInit lifecycle hook to initialize data
  ngOnInit(): void {
    this.eCommerce = [
      {
        number: 1,
        title: 'Custom E-Commerce Development',
        description: 'Build tailored e-commerce platforms that reflect your brand identity and meet the unique needs of your customers, ensuring a seamless shopping experience.'
      },
      {
        number: 2,
        title: 'Mobile Commerce Solutions',
        description: 'Optimize your online store for mobile devices with responsive designs and mobile apps that enhance accessibility and improve user engagement on the go.'
      },
      {
        number: 3,
        title: 'Payment Gateway Integration',
        description: 'Implement secure and flexible payment solutions that support multiple payment methods, providing customers with a hassle-free checkout experience.'
      },
      {
        number: 4,
        title: 'Inventory Management Systems',
        description: 'Utilize advanced inventory management tools that streamline stock tracking, order fulfillment, and supply chain management, ensuring optimal product availability.'
      },
      {
        number: 5,
        title: 'Customer Relationship Management (CRM)',
        description: 'Leverage CRM solutions to manage customer interactions, track preferences, and drive loyalty through personalized marketing and customer engagement strategies.'
      },
      {
        number: 6,
        title: 'Data Analytics and Insights',
        description: 'Employ data analytics to monitor customer behavior, sales trends, and website performance, enabling data-driven decisions that enhance your e-commerce strategy.'
      },

    ];
  }
}

