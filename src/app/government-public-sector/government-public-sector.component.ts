import { Component, OnInit } from '@angular/core';

interface GovernmentSolution {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-government-public-sector',
  templateUrl: './government-public-sector.component.html',
  styleUrls: ['./government-public-sector.component.css']
})
export class GovernmentPublicSectorComponent implements OnInit {
  governmentSolutions: GovernmentSolution[] = [];

  constructor() {}

  ngOnInit(): void {
    this.initializeGovernmentSolutions();
  }

  private initializeGovernmentSolutions(): void {
    this.governmentSolutions = [
      { number: 1, title: 'Digital Transformation', description: 'Enhancing services through technology.' },
      { number: 2, title: 'Data Analytics', description: 'Utilizing data for informed decision-making.' },
      { number: 3, title: 'Cybersecurity', description: 'Protecting public data and systems.' },
      { number: 4, title: 'Integrated Security Solutions', description: 'Protect public infrastructure and sensitive data with our comprehensive security solutions. We offer cybersecurity, surveillance systems, and risk management strategies to safeguard against threats.' },
    { number: 5, title: 'Procurement and Supply Chain Management', description: 'Enhance procurement processes with our solutions that promote transparency and efficiency. We help public sector organizations manage contracts, suppliers, and inventory more effectively.' },
    { number: 6, title: 'Human Resource Management Systems', description: 'Optimize HR processes with our integrated management systems. We streamline recruitment, performance evaluation, and employee engagement, ensuring effective workforce management.' },
    
    ];
  }
}
