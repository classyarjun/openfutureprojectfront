import { Component } from '@angular/core';

interface Offering {
  number: number;
  title: string;
  description: string;
}
@Component({
  selector: 'app-e-commercedevelopment',
  templateUrl: './e-commercedevelopment.component.html',
  styleUrls: ['./e-commercedevelopment.component.css']
})
export class ECommercedevelopmentComponent {
  ecommercedevelopment: Offering[] = [];
 
  constructor() { }
 
  // OnInit lifecycle hook to initialize data
  ngOnInit(): void {
    // Populate the computingsoftware array with data
    this.ecommercedevelopment = [
      {
        number: 1,
        title: 'Custom E-commerce Platforms',
        description: ': We develop bespoke e-commerce solutions that align with your brand identity and business objectives, whether you are launching a new store or upgrading an existing one.'
      },
      {
        number: 2,
        title: 'Responsive Design',
        description: 'Our e-commerce sites are designed to provide an optimal user experience across all devices, ensuring customers can shop effortlessly from desktops, tablets, or mobile phones..'
      },
      {
        number: 3,
        title: 'Secure Payment Integration',
        description: 'We implement secure and diverse payment gateways to facilitate smooth transactions, protect customer data, and build trust.'
      },
      {
        number: 4,
        title: ' Inventory Management Systems',
        description: 'Our solutions include advanced inventory management features that streamline operations and help you efficiently track stock levels and order fulfillment'
      },
      {
        number: 5,
        title: ' SEO-Optimized Frameworks',
        description: 'We ensure your e-commerce platform is optimized for search engines, enhancing visibility and driving organic traffic to your online store.'
      },
      {
        number: 6,
        title: 'Analytics and Reporting Tools',
        description: 'Our integrated analytics tools provide valuable insights into customer behavior, enabling data-driven decisions to optimize your sales strategy.'
      }
    ];
  }
}
