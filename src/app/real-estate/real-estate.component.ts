import { Component } from '@angular/core';


interface Offering {
  number: number;
  title: string;
  description: string;
}
@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.css']
})
export class RealEstateComponent {

  realEstate: Offering[] = [];

  constructor() {}

  ngOnInit(): void {
    this.realEstate = [
      {
        number: 1,
        title: 'Property Management Systems',
        description: 'Streamline property management with our comprehensive software solutions. Our systems facilitate tenant management and financial reporting.'
      },
      {
        number: 2,
        title: 'Real Estate Marketplaces',
        description: 'Develop user-friendly platforms that connect buyers, sellers, and renters. Our real estate marketplaces feature advanced search capabilities.'
      },
      {
        number: 3,
        title: 'Customer Relationship Management (CRM)',
        description: 'Implement tailored CRM solutions that help real estate agents manage leads and automate follow-ups. Our CRM systems enhance communication and foster stronger client relationships.'
      },
      {
        number: 4,
        title: 'Virtual Tours and 3D Visualization',
        description: 'Engage potential buyers with immersive virtual tours and 3D property visualizations. Our solutions allow clients to explore properties remotely and reducing time on the market.'
      },
      {
        number: 5,
        title: 'Data Analytics and Market Insights',
        description: 'Utilize data analytics to gain insights into market trends and customer behavior. Our analytics tools enable informed decision-making and strategic planning.'
      },
      {
        number: 6,
        title: 'Mobile Applications for Real Estate',
        description: 'Develop mobile applications that empower users to browse listings and communicate with agents on-the-go. Our apps enhance accessibility and improve user engagement.'
      }
    ];
  }
}

