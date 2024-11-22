import { Component } from '@angular/core';

@Component({
  selector: 'app-devops',
  templateUrl: './devops.component.html',
  styleUrls: ['./devops.component.css']
})
export class DevopsComponent {
  pythonOfferings = [
    {
      number :1,
      title: 'CI/CD Pipeline Automation',
      description: 'Streamline your development process with continuous integration and continuous delivery (CI/CD) pipelines, automating code testing, building, an deployment for faster releases.'
    },
    {
      number :2,
      title: 'Infrastructure as Code (IaC)',
      description: 'Automate infrastructure management using IaC tools like Terraform and AWS CloudFormation. We ensure your environments are scalable, repeatable, and reliable.'
    },
    {
      number :3,
      title: 'Monitoring & Logging',
      description: 'Gain real-time insights with our monitoring and logging solutions, helping you identify and resolve issues quickly, ensuring application stability and performance.'
    },
    {
      number :4,
      title: 'Cloud Migration & Management',
      description: 'We specialize in migrating and managing applications on cloud platforms like  AWS, Azure, and Google Cloud, optimizing resources and reducing infrastructure costs.'
    },
    {
      number :5,
      title: 'Security & Compliance',
      description: 'Embed security best practices into the DevOps workflow, ensuring compliance with industry standards while reducing vulnerabilities.'
    }
   
  ];
  pythonExpertise = [
    {
      title: 'Web Development',
      description: 'We create dynamic and responsive web applications using popular frameworks like Django and Flask, ensuring a robust user experience.'
    },
    {
      title: 'Data Science and Analytics',
      description: 'Our data science experts utilize Python’s libraries, such as Pandas and NumPy, to extract insights and drive informed business strategies.'
    },
    {
      title: 'Machine Learning and AI',
      description: 'Harness the power of machine learning with Python libraries like TensorFlow and Scikit-Learn to develop intelligent solutions that evolve with your business.'
    },
    {
      title: 'Automation and Scripting',
      description: 'Automate repetitive tasks and streamline workflows with custom scripts, enhancing productivity and efficiency.'
    },
    {
      title: 'API Development',
      description: 'We build and integrate APIs that allow for seamless communication between different software systems, enhancing interoperability.'
    }
];
}
