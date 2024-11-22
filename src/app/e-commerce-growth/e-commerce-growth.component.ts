import { Component } from '@angular/core';

@Component({
  selector: 'app-e-commerce-growth',
  templateUrl: './e-commerce-growth.component.html',
  styleUrls: ['./e-commerce-growth.component.css']
})
export class ECommerceGrowthComponent {
  sapOfferings = [


    {
      number: 1,
      title: 'Custom E-commerce Platforms',
      description: 'Tailored solutions that fit your business needs, designed to provide a seamless and scalable online shopping experience.'
    },
    {
      number: 2,
      title: 'Payment Integration',
      description: 'Secure payment gateways that streamline transactions and ensure a smooth and safe checkout process for users.'
    },
    {
      number: 3,
      title: 'Cart Optimization',
      description: 'Optimized product management and shopping cart systems that drive sales by improving the ease of purchase and reducing cart abandonment.'
    }


    ];
  }
