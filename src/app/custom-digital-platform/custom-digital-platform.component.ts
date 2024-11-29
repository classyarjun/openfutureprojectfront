import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-digital-platform',
  templateUrl: './custom-digital-platform.component.html',
  styleUrls: ['./custom-digital-platform.component.css']
})
export class CustomDigitalPlatformComponent {  sapOfferings = [
    {
      number: 1,
      title: 'Custom Web & Mobile App Development',
      description: 'We specialize in crafting bespoke web and mobile applications designed to meet your specific business needs. Our team develops scalable, high-performance apps that provide seamless user experiences.'
    },
    {
      number: 2,
      title: 'E-commerce Solutions',
      description:'We offer scalable, secure, and customized e-commerce platforms tailored to your business needs. From seamless payment integrations to optimized product management.'
    },
    {
      number: 3,
      title: 'Business Process Automation',
      description: 'Our business process automation services streamline operations, reduce manual tasks, and enhance productivity. By automating workflows like billing, approvals, and CRM systems.'
    },
    {
      number: 4,
      title: 'UI/UX Design & Development',
      description: 'Our UI/UX design services focus on creating visually stunning and intuitive interfaces that prioritize user engagement and satisfaction.'
    }

  ];
  }
