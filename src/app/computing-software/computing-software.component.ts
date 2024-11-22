import { Component } from '@angular/core';


interface Offering {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-computing-software',
  templateUrl: './computing-software.component.html',
  styleUrls: ['./computing-software.component.css']
})
export class ComputingSoftwareComponent {
  computingsoftware: Offering[] = [];

  constructor() { }

  // OnInit lifecycle hook to initialize data
  ngOnInit(): void {
    // Populate the computingsoftware array with data
    this.computingsoftware = [
      {
        number: 1,
        title: 'Cloud Computing Solutions',
        description: 'Develop cloud-based applications that scale with your business needs.'
      },
      {
        number: 2,
        title: 'AI & Machine Learning',
        description: 'Leverage AI to optimize business processes and decision-making.'
      },
      {
        number: 3,
        title: 'Data Analytics Platforms',
        description: 'Analyze big data with powerful software solutions tailored to your industry.'
      },
      {
        number: 4,
        title: 'Cybersecurity Software',
        description: 'Ensure the security of your applications with our advanced cybersecurity solutions.'
      },
      {
        number: 5,
        title: 'Software Integration',
        description: 'Seamlessly integrate new software with your existing systems.'
      },
      {
        number: 6,
        title: 'DevOps & Automation Tools',
        description: 'Implement DevOps and automation for continuous delivery and integration.'
      }
    ];
  }
}
