import { Component } from '@angular/core';


interface Offering {
  number: number;
  title: string;
  description: string;
}
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  news: Offering[] = [];

  constructor() {}

  ngOnInit(): void {
    this.news = [
      {
        number: 1,
        title: 'Content Management Systems (CMS)',
        description: 'Implement robust CMS platforms that streamline content creation, editing, and publishing, allowing your team to manage news articles and multimedia seamlessly.'
      },
      {
        number: 2,
        title: 'Real-Time Analytics',
        description: 'Utilize real-time analytics tools to track audience engagement, monitor trends, and optimize content strategies, ensuring your news reaches the right audience at the right time.'
      },
      {
        number: 3,
        title: 'Multi-Platform Distribution',
        description: 'Reach audiences across various channels—web, mobile, and social media—with our solutions that ensure consistent and engaging news delivery.'
      },
      {
        number: 4,
        title: 'AI-Powered News Aggregation',
        description: 'Harness the power of AI to curate and aggregate news from multiple sources, providing comprehensive coverage and personalized news feeds for your audience.'
      },
      {
        number: 5,
        title: 'Video and Multimedia Production',
        description: 'Enhance storytelling with professional video and multimedia solutions that bring your news to life, engaging viewers through dynamic content.'
      },
      {
        number: 6,
        title: 'Subscription and Monetization Models',
        description: 'Develop effective subscription models and monetization strategies to generate revenue, ensuring sustainable growth for your news organization.'
      }
    ];
  }
}



