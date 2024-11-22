import { Component } from '@angular/core';

@Component({
  selector: 'app-googlecloud',
  templateUrl: './googlecloud.component.html',
  styleUrls: ['./googlecloud.component.css']
})
export class GooglecloudComponent {

  googlecloudOfferings = [
    {
      number: 1,
      title: 'Cloud Migration Services',
      description: 'Streamline your migration to Google Cloud with our expert guidance for a smooth transition.'
    },
    {
      number: 2,
      title: 'Serverless Computing',
      description: 'Use Google Cloud Functions to run applications without managing infrastructure, focusing on building.'
    },
    {
      number: 3,
      title: 'Machine Learning and AI',
      description: 'Utilize Google’s AI capabilities, like TensorFlow, to develop intelligent applications.'
    },
      {
      number: 4,
      title: 'Data Analytics Solutions',
      description: 'Analyze large datasets quickly with BigQuery for valuable insights.'
    },
    {
      number: 5,
      title: 'Compliance & Governance',
      description: 'Ensure your cloud environment meets industry regulations with Google’s compliance tools.'
    },
   
  ];
  googlecloudExpertise = [
    {
      title: 'Cloud Architecture Design',
      description: 'We craft cloud architectures that align with your objectives for optimal resource utilization.'
    },
    {
      title: 'Managed Service',
      description: 'Leverage real-time threat intelligence to stay ahead of cyber threats and enhance your security measures.'
    },
    {
      title: 'Data Storage Solutions',
      description: 'Utilize Google’s scalable storage options for reliable data management and analytics.'
    },
    {
      title: 'DevOps Implementation',
      description: 'Implement CI/CD pipelines using Google Cloud tools for faster development and deployment.'
    },
    {
      title: 'Big Data and AI Solutions',
      description: 'Leverage GCP’s tools to extract meaningful insights from your data for informed decision-making.'
    }
  ];
   
}
 
