import { Component } from '@angular/core';

interface Offering {
  number: number;
  title: string;
  description: string;
}
@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent {

  sports: Offering[] = [];

  constructor() {}

  ngOnInit(): void {
    this.sports = [
      {
        number: 1,
        title: 'Performance Analytics',
        description: 'Leverage advanced analytics tools to monitor athlete performance, track metrics, and gain insights that drive training and strategy decisions.'
      },
      {
        number: 2,
        title: 'Fan Engagement Platforms',
        description: 'Create interactive platforms that connect fans with their favorite teams and athletes, offering personalized content, real-time updates, and immersive experiences.'
      },
      {
        number: 3,
        title: 'Event Management Systems',
        description: 'Streamline the planning and execution of sports events with integrated solutions for ticketing, scheduling, and attendee engagement, ensuring seamless operations.'
      },
      {
        number: 4,
        title: 'Wearable Technology Integration',
        description: 'Utilize wearable devices to gather data on player health, fitness levels, and performance metrics, helping coaches and trainers make informed decisions.'
      },
      {
        number: 5,
        title: 'Virtual and Augmented Reality Experiences',
        description: 'Enhance fan experiences with VR and AR technologies, providing immersive environments for viewing games, training sessions, and fan interactions.'
      },
      {
        number: 6,
        title: 'Sponsorship and Revenue Optimization',
        description: 'Implement data-driven strategies to maximize sponsorship opportunities and enhance revenue streams through targeted marketing and brand partnerships.'
      }
    ];
  }
}

