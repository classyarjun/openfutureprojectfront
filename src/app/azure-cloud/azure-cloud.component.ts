import { Component } from '@angular/core';

@Component({
  selector: 'app-azure-cloud',
  templateUrl: './azure-cloud.component.html',
  styleUrls: ['./azure-cloud.component.css']
})
export class AzureCloudComponent {
  azureOfferings = [
    {
      number: 1,
      title: 'Cloud Migration Services',
      description: 'Expert guidance throughout your migration to Azure, ensuring a smooth and efficient transition.'
    },
    {
      number: 2,
      title: 'Serverless Computing',
      description: 'Use Azure Functions to build applications without managing infrastructure,allowing you to focus on innovation.'
    },
    {
      number: 3,
      title: 'Artificial Intelligence Solutions',
      description: 'Leverage Azure AI capabilities to develop intelligent applications and enhance user experiences.'
    },
      {
      number: 4,
      title: 'Big Data Analytics',
      description: 'Analyze large datasets effortlessly with Azure’s analytics services, gaining valuable insights for informed decisions.'
    },
    {
      number: 5,
      title: 'Compliance & Governance',
      description: 'Ensure your Azure environment meets industry standards and regulations with Microsoft’s compliance tools.'
    },
   
  ];
  azurecloudExpertise = [
    {
      title: 'Cloud Architecture Design',
      description: 'We design scalable and resilient cloud architectures that align with your business goals for maximum efficiency.'
    },
    {
      title: 'Managed Azure Services',
      description: 'Our team provides ongoing management and optimization of your Azure environment, allowing you to focus on your core business.'
    },
    {
      title: 'Data Storage Solutions',
      description: 'Leverage Azure’s scalable storage options for reliable data management and seamless access.'
    },
    {
      title: 'DevOps Implementation',
      description: 'Implement CI/CD pipelines using Azure DevOps for faster development cycles and streamlined operations.'
    },
    {
      title: 'Advanced Analytics and AI',
      description: 'Utilize Azure’s analytics tools, including Azure Machine Learning, to drive data-driven decision-making.'
    }
  ];
    
}
