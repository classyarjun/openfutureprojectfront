import { Component } from '@angular/core';

@Component({
  selector: 'app-cyber-security',
  templateUrl: './cyber-security.component.html',
  styleUrls: ['./cyber-security.component.css']
})
export class CyberSecurityComponent {
  sapOfferings = [
    {
      number: 1,
      title: 'Network Security',
      description: 'Protect your network infrastructure with advanced firewalls, intrusion detection systems, and secure access controls.'
    },
    {
      number: 2,
      title: 'Data Protection',
      description: 'Implement encryption and data loss prevention strategies to safeguard sensitive information from unauthorized access.'
    },
    {
      number: 3,
      title: 'Application Security',
      description: 'Secure your applications throughout their lifecycle with rigorous testing, code reviews, and secure coding practices.'
    },
      {
      number: 4,
      title: 'Cloud Security',
      description: 'Enhance the security of your cloud environments with specialized solutions that address unique cloud-related vulnerabilities.'
    },
    {
      number: 5,
      title: 'Vulnerability Management',
      description: 'Regularly assess and remediate vulnerabilities in your systems to maintain a strong security posture..'
    },
   
  ];

linuxExpertise = [
  {
    title: 'Risk Assessment and Management',
    description: 'We conduct thorough risk assessments to identify vulnerabilities and develop effective management strategies tailored to your organization.'
  },
  {
    title: 'Threat Intelligence',
    description: 'Leverage real-time threat intelligence to stay ahead of cyber threats and enhance your security measures.'
  },
  {
    title: 'Incident Response and Recovery',
    description: 'Our incident response team is prepared to quickly address security breaches and minimize impact, with effective recovery plans to restore operations.'
  },
  {
    title: 'Security Architecture and Design',
    description: 'We design and implement robust security architectures that align with your business goals, ensuring a secure environment for your digital operations.'
  },
  {
    title: 'Security Awareness Training',
    description: 'Empower your employees with training programs that enhance their understanding of cybersecurity best practices and promote a security-first culture..'
  }
];
}
