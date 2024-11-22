import { Component } from '@angular/core';

@Component({
  selector: 'app-linux',
  templateUrl: './linux.component.html',
  styleUrls: ['./linux.component.css']
})
export class LinuxComponent {
  linuxOfferings = [
    {
      number: 1,
      title: 'Linux System Administration',
      description: 'Expert management of your Linux environments, ensuring security, performance, and reliability.'
    },
    {
      number: 2,
      title: 'Consultation and Support',
      description: 'Comprehensive consultation services to help you implement and optimize Linux solutions tailored to your organization.'
    },
    {
      number: 3,
      title: 'Training and Workshops',
      description: 'Empower your team with the skills needed to manage and develop on Linux through targeted training programs.'
    },
    {
      number: 4,
      title: 'Network Configuration and Security',
      description: 'Secure and optimize your Linux network with advanced configuration and monitoring services.'
    },
    {
      number: 5,
      title: 'Backup and Recovery Solutions',
      description: 'Implement robust backup strategies to protect your data and ensure quick recovery in case of failures.'
    },
  ];
  linuxExpertise = [
    {
      title: 'Server Management',
      description: 'We specialize in setting up and managing Linux servers, ensuring optimal performance and security for your applications.'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Leverage Linux for your cloud solutions, including AWS, Google Cloud, and Azure, to enhance scalability and flexibility.'
    },
    {
      title: 'DevOps Integration',
      description: 'Integrate Linux into your DevOps pipeline for streamlined continuous integration and deployment, improving your software development lifecycle.'
    },
    {
      title: 'Containerization with Docker',
      description: 'Utilize Linux with Docker for efficient application deployment, isolation, and scalability, ensuring seamless updates and management.'
    },
    {
      title: 'Custom Development',
      description: 'Build and deploy applications on Linux, tailored to your specific requirements and business objectives.'
    }
  ];
}
 
