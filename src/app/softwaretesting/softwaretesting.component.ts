import { Component } from '@angular/core';
interface Offering {
  number: number;
  title: string;
  description: string;
}
@Component({
  selector: 'app-softwaretesting',
  templateUrl: './softwaretesting.component.html',
  styleUrls: ['./softwaretesting.component.css']
})
export class SoftwaretestingComponent {
  Softwaretesting: Offering[] = [];
 
  constructor() { }
 
  // OnInit lifecycle hook to initialize data
  ngOnInit(): void {
    // Populate the computingsoftware array with data
    this. Softwaretesting= [
      {
        number: 1,
        title: ' Functional Testing',
        description: ': We verify that your software functions as expected, meeting all business requirements and specifications.'
      },
      {
        number: 2,
        title: 'Performance Testing',
        description: 'Our team evaluates the speed, scalability, and stability of your software under various conditions, ensuring optimal performance. Automation Testing: By leveraging automated testing tools, we streamline repetitive testing tasks, enhancing accuracy and efficiency while reducing time-to-market.'
      },
      {
        number: 3,
        title:' Automation Testing ',
        description: ': By leveraging automated testing tools, we streamline repetitive testing tasks, enhancing accuracy and efficiency while reducing time-to-market.'
      },
      {
        number: 4,
        title: 'Security Testing',
        description: ': We safeguard your applications by identifying vulnerabilities and ensuring compliance with the highest security standards.'
      },
      {
        number: 5,
        title: '● Usability Testing',
        description: ' : Focused on the end-user experience, we ensure your software is intuitive, user-friendly, and delivers a seamless experience across platforms.'
      },
      
    
    ];
  }
}



