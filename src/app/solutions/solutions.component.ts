import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent {
  // Array of all cards
  cards = [
    { title: 'Custom Digital Platforms', description: 'Tailored websites and apps designed to meet specific business needs, enhancing functionality, user experience, and operational efficiency with a focus on scalability.' },
    { title: 'Seamless User Experiences', description: 'Creating intuitive, responsive UI/UX designs that engage users, improve accessibility, and enhance satisfaction across all devices and platforms.' },
    { title: 'E-commerce Growth', description: 'Developing scalable e-commerce platforms that help businesses expand, integrate payment solutions, and streamline the customer journey for better conversion rates.' },
    { title: 'Comprehensive Digital Strategy', description: 'Integrating marketing, SEO, analytics, and content to create cohesive digital strategies that drive business growth and increase online presence.' },
    { title: 'Cloud & Data Solutions', description: 'Leveraging cloud technology for scalable infrastructure, data management, and real-time analytics to optimize operational efficiency and decision-making processes.' },
    { title: 'Cybersecurity & Compliance', description: 'Providing robust security solutions and ensuring compliance with industry standards to protect data and business operations from threats and vulnerabilities.' },
    { title: 'Full-Stack Development', description: 'End-to-end development of front-end and back-end systems, enabling complete web and mobile solutions that ensure seamless functionality across platforms.' },
    { title: 'Data-Driven Insights', description: 'Harnessing big data and advanced analytics to provide actionable insights that drive informed business decisions and improve overall performance.' },
    { title: 'AI & Machine Learning', description: 'Implementing AI and machine learning technologies to automate processes, predict trends, and enhance business intelligence for smarter decision-making.' },
    { title: 'Business Automation Solutions', description: 'Streamlining business processes through automation, reducing manual work, improving productivity, and enabling efficient resource management.' },
    { title: 'Continuous Integration & DevOps', description: 'Automating development pipelines with DevOps practices, ensuring faster deployment, better collaboration, and continuous integration .' },
    { title: 'Scalable Software Architecture', description: 'Designing flexible and scalable software systems that grow with your business, ensuring high performance and adaptability to evolving demands.' },
  ];

  // Group cards into slides of 4
  slides: Array<{ title: string; description: string }[]> = [];
  currentSlideIndex = 0;

  constructor() {
    this.createSlides();
  }

  createSlides() {
    for (let i = 0; i < this.cards.length; i += 4) {
      this.slides.push(this.cards.slice(i, i + 4));
    }
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  moveToSlide(index: number) {
    this.currentSlideIndex = index;
  }
}
