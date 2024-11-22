import { Component } from '@angular/core';

interface Offering {
  number: number;
  title: string;
  description: string;
}
@Component({
  selector: 'app-business-analyst',
  templateUrl: './business-analyst.component.html',
  styleUrls: ['./business-analyst.component.css'],
})
export class BusinessAnalystComponent {
  googlecloudOfferings = [
    {
      number: 1,
      title: 'Business Process Improvement',
      description: 'Streamline your operations to improve efficiency and reduce costs.',},
    {
      number: 2,
      title: 'Data-Driven Decision Making',
      description: 'Use insights and analytics to inform your business strategies.',},
    {
      number: 3,

      title: 'Risk & Gap Analysis',
      description: 'Identify potential risks and areas for improvement before they impact your operations.',
    },
    {
      number: 4,
      title: 'IT & Business Alignment',
      description: 'Ensure that technology solutions align with your business goals and offer real value.',
    },


  ];

  googlecloudExpertise = [
    {
      title: 'Requirement Gathering',
      description: 'We collaborate closely with stakeholders to understand business needs, challenges, and goals. Through interviews, workshops, and document analysis, we ensure that every requirement is captured in detail.',
    },
    {
      title: 'Business Process Mapping',
      description: 'Our team analyzes your current processes, identifies inefficiencies, and maps out optimized workflows that improve operational efficiency and productivity.',
    },
    {
      title: 'Feasibility Studies & Solution Design',
      description: 'We assess the feasibility of proposed solutions, balancing technical requirements with business objectives to create viable and impactful strategies.',
    },
    {
      title: 'Stakeholder Communication & Reporting',
      description: 'Effective communication is key to project success. We bridge the gap between technical teams and business stakeholders, ensuring transparency, alignment, and timely updates.',
    },
    {
      title: 'Change Management & Implementation Support',
      description: 'From planning to implementation, we guide organizations through the change process, ensuring successful adoption and minimizing disruption.',
    },
  ];
}
