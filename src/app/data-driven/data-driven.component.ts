import { Component } from '@angular/core';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent {

  sapOfferings = [


    {
      number: 1,
      title: 'Big Data Analytics',
      description: 'We provide comprehensive analytics services that transform large volumes of data into valuable insights for informed decision-making.'
    },
    {
      number: 2,
      title: 'Custom Dashboard Creation',
      description: 'Our team develops user-friendly dashboards that visually present critical data, making it easy to monitor performance and track key metrics.'
    },
    {
      number: 3,
      title: 'Predictive Analysis',
      description: 'We implement predictive analytics techniques to forecast trends, helping you stay ahead of the competition and make proactive business decisions.'
    }




    ];
  }

  

