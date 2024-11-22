import { Component } from '@angular/core';

@Component({
  selector: 'app-ai-machine-learning',
  templateUrl: './ai-machine-learning.component.html',
  styleUrls: ['./ai-machine-learning.component.css']
})
export class AiMachineLearningComponent {
  sapOfferings = [
    {
      number: 1,
      title: 'AI-Powered Automation',
      description: 'We implement AI solutions that automate workflows and processes, significantly improving operational efficiency and productivity.'
    },
    {
      number: 2,
      title: 'Machine Learning Model Development',
      description: 'Our team develops custom machine learning models tailored to your business needs, providing actionable insights and predictions for strategic decision-making.'
    },
    {
      number: 3,
      title: 'Natural Language Processing (NLP)',
      description: 'We offer NLP applications that enhance user interactions and extract valuable insights from textual data, improving customer engagement and satisfaction.'
    }
  ];
  }
