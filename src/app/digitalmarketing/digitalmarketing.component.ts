import { Component } from '@angular/core';
interface Offering {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-digitalmarketing',
  templateUrl: './digitalmarketing.component.html',
  styleUrls: ['./digitalmarketing.component.css']
})
export class DigitalmarketingComponent {
  Digitalmarketing: Offering[] = [];
 
  constructor() { }
 
  // OnInit lifecycle hook to initialize data
  ngOnInit(): void {
    // Populate the computingsoftware array with data
    this.Digitalmarketing= [
      {
        number: 1,
        title: 'Search Engine Optimization (SEO)',
        description: ' We enhance your website’s visibility on search engines through effective SEO strategies, driving organic traffic and improving search rankings.'
      },
      {
        number: 2,
        title: 'Pay-Per-Click Advertising (PPC)',
        description: 'Our targeted PPC campaigns ensure you reach the right audience at the right time, maximizing your ROI through precise ad placements.'
      },
      {
        number: 3,
        title: '● Social Media Marketing',
        description: ' We create engaging social media strategies that foster community interaction and brand loyalty across platforms like Facebook, Instagram, LinkedIn, and Twitter.'
      },
      {
        number: 4,
        title: '●Content Marketing',
        description: ' Our team produces high-quality, relevant content that resonates with your audience, boosting brand awareness and establishing your authority in the industry.'
      },
      {
        number: 5,
        title: '● Email Marketing',
        description: 'We design personalized email campaigns that nurture leads and encourage conversions, delivering the right message to the rightaudience.'
      },
      {
        number: 6,
        title: 'Analytics and Reporting',
        description: 'We provide detailed analytics to track campaign performance and user engagement, enabling data-driven adjustments forcontinuous improvement.'
      }
    ];
  }
}


