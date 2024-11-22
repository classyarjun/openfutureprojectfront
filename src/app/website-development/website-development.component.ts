import { Component } from '@angular/core';
interface Offering {
  number: number;
  title: string;
  description: string;
}
@Component({
  selector: 'app-website-development',
  templateUrl: './website-development.component.html',
  styleUrls: ['./website-development.component.css']
})
export class WebsiteDevelopmentComponent {
  websitedevelopment: Offering[] = [];
 
  constructor() { }
 
  // OnInit lifecycle hook to initialize data
  ngOnInit(): void {
    // Populate the computingsoftware array with data
    this.websitedevelopment = [
      {
        number: 1,
        title: 'Custom Website Development',
        description: 'We create bespoke websites that are tailored to your specific needs, ensuring a unique digital experience that sets your brand apart from competitors.'
      },
      {
        number: 2,
        title: 'E-commerce Solutions',
        description: 'Our e-commerce platforms are designed to deliver secure, user-friendly online shopping experiences that drive sales and improve customer retention.'
      },
      {
        number: 3,
        title: 'Content Management Systems (CMS)',
        description: 'We specialize in CMS solutions like WordPress, Drupal, and custom CMS platforms, making it easy for businesses to manage and update content with ease.'
      },
      {
        number: 4,
        title: 'Mobile-Responsive Design',
        description: 'Our websites are fully optimized for all devices, ensuring a seamless experience across desktops, tablets, and smartphones to cater to today’s mobile-first users.'
      },
      {
        number: 5,
        title: 'Web Application Development',
        description: 'We develop advanced web applications to enhance your business processes, providing your users with dynamic, interactive, and scalable solutions.'
      },
      {
        number: 6,
        title: 'SEO Optimization and Digital Marketing Integration',
        description: 'Our development process includes SEO best practices and digital marketing integrations to improve your website’s visibility and drive traffic to your business.'
      }
    ];
  }
}