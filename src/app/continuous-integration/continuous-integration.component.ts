import { Component } from '@angular/core';

@Component({
  selector: 'app-continuous-integration',
  templateUrl: './continuous-integration.component.html',
  styleUrls: ['./continuous-integration.component.css'],
})
export class ContinuousIntegrationComponent {
  sapOfferings = [
    {
      number: 1,
      title: 'DevOps Pipeline Automation',
      description:
        'We implement automation tools that enhance the development process, ensuring efficient and consistent delivery of software solutions.',
    },
    {
      number: 2,
      title: 'Continuous Integration/Continuous Deployment (CI/CD)',
      description:
        'Our CI/CD practices allow for seamless updates and quick releases, enabling teams to deploy changes without disruptions.',
    },
    {
      number: 3,
      title: 'Infrastructure as Code (IaC)',
      description:
        'We use IaC practices to manage infrastructure through code, improving scalability and reducing operational risks in your environment.',
    },
  ];
}
