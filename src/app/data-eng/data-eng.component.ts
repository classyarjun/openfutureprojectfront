import { Component } from '@angular/core';

@Component({
  selector: 'app-data-eng',
  templateUrl: './data-eng.component.html',
  styleUrls: ['./data-eng.component.css']
})
export class DataEngComponent {
  dataengOfferings = [
    {
      number :1,
      title: 'Consultation',
      description: 'We collaborate with your team to understand your data needs and objectives.'
    },
    {
      number :2,
      title: 'Strategy',
      description: 'We design a data engineering solution tailored to your requirements.'
    },
    {
      number :3,
      title: 'Implementation',
      description: 'Our engineers build and deploy data pipelines, warehouses,and integration tools.'
    },
   
   
  ];
  dataengExpertise = [
    {
      title: 'Data Pipeline Development',
      description: 'Design and implement seamless data pipelines that automate the flow of data from various sources to your data warehouse or data lake.'
    },
    {
      title: 'ETL (Extract, Transform, Load)',
      description: 'Optimize the ETL processes to ensure data is clean, accurate, and readily  available for analysis, minimizing manual efforts and maximizing efficiency.'
    },
    {
      title: 'Data Warehousing',
      description: 'Build and maintain high-performance data warehouses that provide easy  access to structured and unstructured data, facilitating faster business insights.'
    },
    {
      title: 'Cloud Data Integration',
      description: 'Leverage cloud platforms like AWS, Azure, and Google Cloud for scalable and cost-effective data integration, enabling smooth data access from anywhere.'
    },
    {
      title: 'Data Governance & Security',
      description: 'Ensure data integrity and compliance with industry regulations through robust governance frameworks and security protocols.'
    }
];
}
