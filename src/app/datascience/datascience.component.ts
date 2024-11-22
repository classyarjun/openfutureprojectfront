import { Component } from '@angular/core';

@Component({
  selector: 'app-datascience',
  templateUrl: './datascience.component.html',
  styleUrls: ['./datascience.component.css']
})
export class DatascienceComponent {

  sapOfferings = [
    {
      number: 1,
      title: 'Predictive Analytics',
      description: 'Leverage historical data to predict future trends and behaviors, empowering businesses to stay ahead of the curve with informed decisions.'
    },
    {
      number: 2,
      title: 'Data Mining & Visualization',
      description: 'Extract meaningful insights from large datasets and present them through intuitive visualizations that enable quick, data-driven decisions.'
    },
    {
      number: 3,
      title: 'Machine Learning & AI Solutions',
      description: 'Develop and deploy machine learning models tailored to your business needs, automating processes, enhancing customer experiences, and improving accuracy.'
    },
      {
      number: 4,
      title: 'Big Data Analytics',
      description: 'Manage and analyze vast amounts of data with our scalable big data solutions, unlocking patterns and trends that lead to competitive advantages.'
    },
    {
      number: 5,
      title: 'Natural Language Processing (NLP)',
      description: 'Utilize NLP to process and interpret unstructured text data, enabling sentiment analysis, chatbots, and other language-based applications.'
    },
   
  ];
}
 

