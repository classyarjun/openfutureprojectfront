import { Component } from '@angular/core';
interface Offering {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education: Offering[] = [];

  constructor() {}

  // OnInit lifecycle hook to initialize data
  ngOnInit(): void {
    this.education = [
      {
        number: 1,
        title: 'E-Learning Platforms',
        description: 'Develop intuitive e-learning platforms that facilitate online courses, interactive content, and remote assessments, ensuring a seamless learning experience for students and educators.'
      },
      {
        number: 2,
        title: 'Learning Management Systems (LMS)',
        description: 'Implement robust LMS solutions that enable institutions to manage course content, track student progress, and foster collaboration among learners and instructors.'
      },
      {
        number: 3,
        title: 'Data Analytics for Student Success',
        description: 'Utilize data analytics to monitor student performance, identify at-risk learners, and personalize educational pathways, ensuring every student achieves their full potential.'
      },
      {
        number: 4,
        title: 'Virtual Classrooms',
        description: 'Create immersive virtual classroom environments that support real-time interaction, video conferencing, and collaborative tools, making remote learning engaging and effective.'
      },
      {
        number: 5,
        title: 'Mobile Learning Solutions',
        description: 'Develop mobile-friendly applications that provide students with access to learning materials anytime, anywhere, fostering flexibility and continuous learning.'
      },
      {
        number: 6,
        title: 'Gamification of Learning',
        description: 'Integrate gamification techniques into educational content to enhance engagement, motivation, and retention, making learning enjoyable and effective.'
      },
      
    ];
  }

}
