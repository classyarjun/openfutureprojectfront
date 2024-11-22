import { Component } from '@angular/core';
interface Offering {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-javafullstack',
  templateUrl: './javafullstack.component.html',
  styleUrls: ['./javafullstack.component.css']
})
export class JavafullstackComponent {
  Javafullstack: Offering[] = [];

  constructor() { }

  // OnInit lifecycle hook to initialize data
  ngOnInit(): void {
    // Populate the computingsoftware array with data
    this. Javafullstack= [
      {
        number: 1,
        title: 'Backend Development',
        description: 'Leveraging Java frameworks like Spring and Hibernate, we build secure and efficient server-side applications that ensure seamless data management and processing.'
      },
      {
        number: 2,
        title: ' Frontend Development',
        description: 'Our developers utilize modern technologies such as Angular and React to create intuitive and engaging user interfaces that enhance usability and responsiveness.'
      },
      {
        number: 3,
        title: 'API Integration',
        description: ' We design and implement RESTful APIs that facilitate smooth communication between the front end and back end, ensuring a cohesive application experience.'
      },
      {
        number: 4,
        title: 'Database Management',
        description: ' Our team specializes in integrating various database solutions, including MySQL and PostgreSQL, to ensure reliable data storageand retrieval.'
      },
      {
        number: 5,
        title: 'Cloud Deployment',
        description: 'We offer cloud-based deployment options, enabling your applications to scale effortlessly while ensuring high availability and performance.'
      },
      {
        number: 6,
        title: ' Agile Development Methodology',
        description: 'Adopting agile practices, we ensure rapid development cycles and continuous feedback, allowing us to adapt to changing requirements and deliver quality results on time.'
      }
    ];
  }
}



