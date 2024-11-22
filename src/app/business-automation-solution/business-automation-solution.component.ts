import { Component } from '@angular/core';

@Component({
  selector: 'app-business-automation-solution',
  templateUrl: './business-automation-solution.component.html',
  styleUrls: ['./business-automation-solution.component.css'],
})
export class BusinessAutomationSolutionComponent {
  sapOfferings = [
    {
      number: 1,
      title: 'Workflow Automation',
      description:
        'We design and implement automated workflows that streamline processes, saving time and reducing errors for increased efficiency.',
    },
    {
      number: 2,
      title: 'ERP and CRM Integration',
      description:
        'Our solutions include the integration of ERP and CRM systems, enhancing data flow and improving customer relationship management across your organization.',
    },
    {
      number: 3,
      title: 'Document Automation',
      description:
        'We provide automation for document processing and billing, increasing accuracy and significantly reducing administrative workload.',
    },
  ];
}
