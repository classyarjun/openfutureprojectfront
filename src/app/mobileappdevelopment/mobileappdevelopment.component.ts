import { Component } from '@angular/core';

interface Offering {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-mobileappdevelopment',
  templateUrl: './mobileappdevelopment.component.html',
  styleUrls: ['./mobileappdevelopment.component.css']
})
export class MobileappdevelopmentComponent {

  websitedevelopment: Offering[] = [];

  constructor() { }

  ngOnInit(): void {
    this.websitedevelopment = [
      {
        number: 1,
        title: 'Native and Cross-Platform Development',
        description: 'Custom apps built for iOS, Android, and hybrid solutions that deliver consistent performance across devices.'
      },
      {
        number: 2,
        title: 'User-Centered Design',
        description: 'Intuitive and visually appealing interfaces that prioritize user experience and engagement.'
      },
      {
        number: 3,
        title: 'Scalable and Secure Solutions',
        description: 'Robust apps built to scale your business while maintaining high-security standards.'
      },
      {
        number: 4,
        title: 'Integration with Latest Technologies',
        description: 'AI, AR/VR, IoT, and more, enabling innovative functionalities to keep you ahead of the competition.'
      },
      {
        number: 5,
        title: 'App Maintenance & Support',
        description: 'Ongoing support to ensure your app remains updated, secure, and fully functional.'
      }
    ];
  }
}
