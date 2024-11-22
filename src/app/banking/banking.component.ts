import { Component } from '@angular/core';

interface Offering {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent {

  banking: Offering[] = [];

  constructor() {}

  ngOnInit(): void {
    this.banking = [
      {
        number: 1,
        title: 'Core Banking Modernization',
        description: 'Upgrade your legacy systems with robust core banking solutions that improve efficiency, enhance security, and support a wide range of banking services.'
      },
      {
        number: 2,
        title: 'Digital Banking Platforms',
        description: 'Create user-friendly digital banking experiences that allow customers to manage their accounts and access services seamlessly through mobile and web applications.'
      },
      {
        number: 3,
        title: 'Risk and Compliance Management',
        description: 'Implement advanced analytics and monitoring tools to ensure compliance with regulations, manage risks, and protect against fraud, safeguarding your institution and customers.'
      },
      {
        number: 4,
        title: 'Customer Relationship Management (CRM)',
        description: 'Leverage CRM solutions to enhance customer engagement, personalize offerings, and improve service delivery, driving loyalty and satisfaction.'
      },
      {
        number: 5,
        title: 'Data Analytics and Business Intelligence',
        description: 'Utilize data analytics to gain insights into customer behavior, market trends, and operational efficiency, enabling data-driven decision-making for strategic growth.'
      },
      {
        number: 6,
        title: 'Blockchain Solutions',
        description: 'Explore the potential of blockchain technology for secure transactions, smart contracts, and enhanced transparency, revolutionizing the way banking operates.'
      }
    ];
  }
}


