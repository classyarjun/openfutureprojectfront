import { Component } from '@angular/core';

interface Offering {
  number: number;
  title: string;
  description: string;
}
@Component({
  selector: 'app-fintech',
  templateUrl: './fintech.component.html',
  styleUrls: ['./fintech.component.css']
})
export class FintechComponent {
  fintech: Offering[] = [];

  constructor() {}

  ngOnInit(): void {
    this.fintech = [
      {
        number: 1,
        title: 'Digital Banking Platforms',
        description: 'Develop intuitive digital banking applications that provide users with a comprehensive suite of financial services. Our platforms enable online account management and fund transfers.'
      },
      {
        number: 2,
        title: 'Payment Processing Solutions',
        description: 'Streamline payment processing with secure and flexible payment gateways. We offer solutions that support various payment methods and convenient experience for customers.'
      },
      {
        number: 3,
        title: 'Blockchain Technology',
        description: 'Leverage blockchain for secure and tamper-proof transactions. Our blockchain solutions enhance trust and paving the way for innovative financial products.'
      },
      {
        number: 4,
        title: 'Regulatory Compliance Solutions',
        description: 'Navigate the complexities of financial regulations with our compliance management tools. We help businesses automate compliance processes and ensuring adherence to regulatory requirements.'
      },
      {
        number: 5,
        title: 'Robo-Advisory Services',
        description: 'Offer automated investment advice and portfolio management through our robo-advisory platforms. Our solutions utilize algorithms to analyze market trends and provide personalized investment strategies.'
      },
      {
        number: 6,
        title: 'Peer-to-Peer Lending Platforms',
        description: 'Facilitate peer-to-peer lending by connecting borrowers with individual lenders. Our platforms provide a transparent and efficient way for individuals to access loans while offering investors competitive returns.'
      }
    ];
  }
}
