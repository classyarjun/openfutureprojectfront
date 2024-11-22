import { Component } from '@angular/core';

interface Offering {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-media-entertainment',
  templateUrl: './media-entertainment.component.html',
  styleUrls: ['./media-entertainment.component.css']
})
export class MediaEntertainmentComponent {
  mediaentertainment: Offering[] = [];

  constructor() { }

  // OnInit lifecycle hook to initialize data
  ngOnInit(): void {
    // Populate the computingsoftware array with data
    this.mediaentertainment = [
      {
        number: 1,
        title: 'Content Management Systems (CMS)',
        description: 'Streamline content creation and distribution with our robust CMS solutions, designed to manage diverse media formats and ensure efficient workflows across platforms.'
      },
      {
        number: 2,
        title: 'Streaming Services Development',
        description: 'Create and deploy high-quality streaming services that deliver seamless viewing experiences across devices, enabling users to enjoy content anytime, anywhere.'
      },
      {
        number: 3,
        title: 'Interactive Media Experiences',
        description: 'Enhance audience engagement through interactive applications, AR/VR experiences, and gamification strategies that captivate and retain viewers.'
      },
      {
        number: 4,
        title: 'Digital Rights Management (DRM)',
        description: 'Protect your intellectual property with our comprehensive DRM solutions, ensuring secure distribution and access control for digital content.'
      },
      {
        number: 5,
        title: 'Data Analytics for Audience Insights',
        description: 'Leverage advanced analytics to gain insights into audience behavior and preferences, allowing for data-driven decision-making and targeted marketing strategies.'
      },
      {
        number: 6,
        title: 'Social Media Integration',
        description: 'Integrate social media platforms to foster community engagement, expand reach, and enhance content sharing, creating a dynamic interaction between creators and audiences.'
      }
    ];
  }
}

