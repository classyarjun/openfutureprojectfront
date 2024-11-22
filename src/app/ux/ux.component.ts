import { Component } from '@angular/core';
interface Offering {
  number: number;
  title: string;
  description: string;
}
@Component({
  selector: 'app-ux',
  templateUrl: './ux.component.html',
  styleUrls: ['./ux.component.css']
})
export class UxComponent {
 ux: Offering[] = [];
 
  constructor() { }
 
  // OnInit lifecycle hook to initialize data
  ngOnInit(): void {
    // Populate the computingsoftware array with data
    this.ux = [
      {
        number: 1,
        title: 'Responsive Design',
        description: 'We create designs that fluidly adapt to various screen sizes, ensuring a consistent experience across desktops, tablets, and mobile deices.'
      },
      {
        number: 2,
        title: 'User-Centered Approach',
        description: 'Every design decision is guided by user behavior and preferences, resulting in intuitive navigation and enhanced engagement. Interactive Prototyping: Our interactive prototypes allow you to visualize and refine the user experience before development begins.'
      },
      {
        number: 3,
        title: 'Interactive Prototyping',
        description: 'Our interactive prototypes allow you to visualize and refine the user experience before development begins.'
      },
      {
        number: 4,
        title: ' Performance-Optimized Interfaces',
        description: 'Our designs are aesthetically pleasing and optimized for fast load times and smooth interactions.'
      },
      {
        number: 5,
        title: 'Consistency Across Platforms',
        description: 'We maintain a unified look and feel for your brand across all digital touchpoints, enhancing user satisfaction and retention.'
      },
      
    ];
  }
}

