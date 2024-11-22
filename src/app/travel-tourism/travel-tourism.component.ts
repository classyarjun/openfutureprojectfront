import { Component } from '@angular/core';

interface Offering {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-travel-tourism',
  templateUrl: './travel-tourism.component.html',
  styleUrls: ['./travel-tourism.component.css']
})
export class TravelTourismComponent {
  travelTourism: Offering[] = [];

  constructor() {}

  ngOnInit(): void {
    this.travelTourism = [
      {
        number: 1,
        title: 'Comprehensive Booking Platforms',
        description: 'Develop user-friendly booking systems that allow travelers to seamlessly plan, book, and manage their trips, ensuring a hassle-free experience from start to finish.'
      },
      {
        number: 2,
        title: 'Mobile Applications for Travelers',
        description: 'Create mobile apps that enable travelers to access essential information, receive real-time updates, and navigate their journeys effortlessly.'
      },
      {
        number: 3,
        title: 'Customer Experience Enhancements',
        description: 'Implement personalized solutions that cater to customer preferences, elevating satisfaction and encouraging repeat business in the travel industry.'
      },
      {
        number: 4,
        title: 'Integrated CRM Systems',
        description: 'Leverage CRM systems to manage customer interactions, allowing travel companies to personalize offerings, build loyalty, and increase customer engagement.'
      },
      {
        number: 5,
        title: 'Data Analytics for Insights',
        description: 'Utilize data analytics to gain insights into customer preferences, popular destinations, and booking patterns, helping businesses make informed decisions.'
      },
      {
        number: 6,
        title: 'Supply Chain Management',
        description: 'Optimize supply chain processes to ensure efficient management of resources, including transportation, accommodations, and travel logistics.'
      }
    ];
  }
}
