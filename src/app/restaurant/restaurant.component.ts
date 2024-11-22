import { Component } from '@angular/core';

interface Offering {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {
  restaurant: Offering[] = [];

  constructor() {}

  // OnInit lifecycle hook to initialize data
  ngOnInit(): void {
    this.restaurant = [
      {
        number: 1,
        title: 'Online Ordering Systems',
        description: 'Implement user-friendly online ordering platforms that enable customers to browse menus, customize orders, and place deliveries or pickups effortlessly.'
      },
      {
        number: 2,
        title: 'Point of Sale (POS) Systems',
        description: 'Develop advanced POS systems that facilitate seamless transactions, inventory management, and real-time reporting, helping restaurants optimize their operations.'
      },
      {
        number: 3,
        title: 'Table Reservation Solutions',
        description: 'Create efficient table reservation systems that allow customers to book tables online, enhancing guest satisfaction and reducing wait times.'
      },
      {
        number: 4,
        title: 'Customer Relationship Management (CRM)',
        description: 'Utilize CRM tools to manage customer data, track preferences, and foster loyalty through personalized promotions and targeted marketing campaigns.'
      },
      {
        number: 5,
        title: 'Menu Management Software',
        description: 'Provide intuitive menu management solutions that allow restaurants to easily update offerings, prices, and descriptions, ensuring accuracy and appeal.'
      },
      {
        number: 6,
        title: 'Feedback and Review Management',
        description: 'Implement systems to gather and analyze customer feedback, helping restaurants enhance service quality and make informed decisions based on guest insights.'
      },
      
    ];
  }
}
