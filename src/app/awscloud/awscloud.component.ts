import { Component } from '@angular/core';

@Component({
  selector: 'app-awscloud',
  templateUrl: './awscloud.component.html',
  styleUrls: ['./awscloud.component.css']
})
export class AwscloudComponent {

  AswOfferings = [
    {
      number :1,
      title: 'AWS Migration Services',
      description: 'Simplify your cloud journey with our end-to-end migration services that include planning, testing, and deployment.'
    },
    {
      number :2,
      title: 'Serverless Computing',
      description: 'Eliminate infrastructure management with AWS Lambda, allowing you to run code without provisioning servers and focusing on building applications.'
    },
    {
      number :3,
      title: 'AI & Machine Learning Solutions',
      description: 'Leverage AWS’s powerful machine learning tools like SageMaker to build intelligent applications that analyze data and predict outcomes.'
    },
    {
      number :4,
      title: 'Disaster Recovery & Backup',
      description: 'Secure your critical data with robust disaster recovery strategies using AWS’s global infrastructure, ensuring uptime and resilience.'
    },
    {
      number :5,
      title: 'Compliance & Governance',
      description: 'Stay compliant with industry regulations by leveraging AWS’s extensive set of security and governance tools.'
    }
   
  ];
  AswExpertise = [
    {
      title: 'Cloud Architecture & Design',
      description: 'We design cloud architectures that are tailored to your specific needs, ensuring optimal performance, scalability, and cost-effectiveness.'
    },
    {
      title: 'AWS Managed Services',
      description: 'Focus on your core business while we handle your AWS infrastructure, monitoring, maintaining, and optimizing your cloud environment for you.'
    },
    {
      title: 'Data Storage & Backup',
      description: 'With AWS’s storage solutions like Amazon S3 and Glacier, we ensure secure and reliable data storage, backup, and disaster recovery solutions.'
    },
    {
      title: 'Cloud DevOps',
      description: 'We enable continuous integration and delivery pipelines using AWS tools, streamlining development, testing, and deployment processes to accelerate your time to market.'
    },
    {
      title: 'Big Data & Analytics',
      description: 'Using AWS analytics tools such as Redshift, EMR, and Athena, we help you derive actionable insights from your data, enabling smarter decision-making and business growth.'
    }
];
}
 