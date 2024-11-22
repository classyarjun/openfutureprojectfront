import { Component } from '@angular/core';

@Component({
  selector: 'app-cybersecurity-compliance',
  templateUrl: './cybersecurity-compliance.component.html',
  styleUrls: ['./cybersecurity-compliance.component.css']
})
export class CybersecurityComplianceComponent {
  sapOfferings = [


    {
      number: 1,
      title: 'Data Encryption',
      description: 'We implement strong encryption methods to protect sensitive data both in transit and at rest, ensuring confidentiality and compliance with industry standards.'
    },
    {
      number: 2,
      title: 'Vulnerability Assessments',
      description: 'Our team conducts thorough assessments to identify potential vulnerabilities in your systems, providing actionable recommendations for improvement and enhanced security.'
    },
    {
      number: 3,
      title: 'Incident Response Planning',
      description: 'We develop comprehensive incident response plans that prepare your business for potential cybersecurity events, minimizing impact and ensuring swift recovery.'
    }


    ];
  }
