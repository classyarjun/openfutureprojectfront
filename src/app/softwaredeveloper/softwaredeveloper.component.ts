import { Component } from '@angular/core';
interface Offering {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-softwaredeveloper',
  templateUrl: './softwaredeveloper.component.html',
  styleUrls: ['./softwaredeveloper.component.css']
})
export class SoftwaredeveloperComponent {
  Softwaredeveloper: Offering[] = [];
 
  constructor() { }
 
  // OnInit lifecycle hook to initialize data
  ngOnInit(): void {
    // Populate the computingsoftware array with data
    this. Softwaredeveloper= [
      {
        number: 1,
        title: ' Custom Application Development',
        description: 'We develop bespoke software solutions that align with your business goals, enhancing efficiency and growth. Web and Mobile App Development: Our developers create responsive,feature-rich web and mobile applications that offer seamless user experiencesacross platforms.'
      },
      {
        number: 2,
        title: ' Web and Mobile App Development',
        description: 'Our developers create responsive,feature-rich web and mobile applications that offer seamless user experiences across platforms.'
      },
      {
        number: 3,
        title: ' Backend and Frontend Expertise',
        description: ':From robust backend systems to intuitive, user-friendly frontends, our developers use the latest technologies to deliver full-stack solutions.'
      },
      {
        number: 4,
        title: 'API Development and Integration',
        description: ': We specialize in designing and integrating APIs that enable efficient data exchange and interaction between different systems.'
      },
      {
        number: 5,
        title: 'Cloud and DevOps Solutions',
        description: ' : Leveraging cloud platforms and DevOps practices, we deliver scalable, reliable, and secure software solutions.'
      },
      {
        number: 6,
        title: 'Agile Development Process',
        description: 'We follow an agile development approach, ensuring quick iterations, regular feedback, and timely delivery of high-quality software.'
      },
    
    ];
  }
}

