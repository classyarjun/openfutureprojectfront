import { Component } from '@angular/core';
interface Offering {
  number: number;
  title: string;
  description: string;
}
@Component({
  selector: 'app-powerbi',
  templateUrl: './powerbi.component.html',
  styleUrls: ['./powerbi.component.css']
})
export class PowerbiComponent {
  Powerbi: Offering[] = [];
 
  constructor() { }
 
  // OnInit lifecycle hook to initialize data
  ngOnInit(): void {
    // Populate the computingsoftware array with data
    this.  Powerbi= [
      {
        number: 1,
        title: 'Custom Dashboards and Reports',
        description: 'We design tailored dashboards and reports that meet your unique business needs, providing real-time insights into critical metrics.'
      },
      {
        number: 2,
        title: 'Data Integration',
        description: ' Our team connects multiple data sources, ensuring seamless integration and a unified view of your data for comprehensive analysis.'
      },
      {
        number: 3,
        title: 'Advanced Analytics',
       description: ' With Power BI robust analytical tools, we help you uncover trends, patterns, and opportunities, driving strategic decision-making. Interactive Visualizations: We create interactive visualizations that allow you to explore your data dynamically, making complex information easy to understand.'
      },
      {
        number: 4,
        title: 'Interactive Visualizations',
        description: ' We create interactive visualizations that allow you to explore your data dynamically, making complex information easy tounderstand.'

      },
      {
        number: 5,
        title: ' Performance Optimization',
        description: 'Our expertise ensures that your Power BI environment runs smoothly, with fast data processing and optimized performance.'
      },
      
    ];
  }
}





