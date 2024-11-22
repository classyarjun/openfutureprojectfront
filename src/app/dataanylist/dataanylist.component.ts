import { Component } from '@angular/core';

@Component({
  selector: 'app-dataanylist',
  templateUrl: './dataanylist.component.html',
  styleUrls: ['./dataanylist.component.css']
})
export class DataanylistComponent {
  
   

  dataanylistExpertise = [
    {
      title: 'Data Collection & Cleansing',
      description: 'We gather, clean, and prepare data from diverse sources, ensuring you have accurate and consistent data for analysis.'
    },
    {
      title: 'Data Visualization',
      description: 'Create interactive and intuitive dashboards and visual reports using tools like Power BI, Tableau, and Excel to help stakeholders easily interpret complex data.'
    },
    {
      title: 'Statistical Analysis',
      description: 'Leverage advanced statistical methods to identify trends, uncover patterns,and generate insights that inform strategic business decisions.'
    },
    {
      title: 'KPI Monitoring & Reporting',
      description: 'Track critical performance indicators (KPIs) and provide detailed reporting to help you understand your business performance in real-time.'
    },
    {
      title: 'Predictive Analytics',
      description: 'Use historical data and machine learning techniques to forecast future trends and outcomes, giving your business a competitive edge.'
    }
];
}
