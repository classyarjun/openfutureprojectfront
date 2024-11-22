import { Component } from '@angular/core';

interface Solution {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {
  shippingSolutions: Solution[] = [
    { number: 1, title: 'Supply Chain Management', description: 'Optimize your supply chain with solutions that provide real-time visibility, tracking, and analytics to streamline operations and reduce costs.' },
    { number: 2, title: 'Fleet Management Systems', description: 'Enhance fleet performance with vehicle tracking, route optimization, and maintenance scheduling for peak efficiency.' },
    { number: 3, title: 'Automated Booking and Scheduling', description: 'Automate bookings and scheduling for reduced errors and improved turnaround times.' },
    { number: 4, title: 'Cargo Tracking Solutions', description: 'Real-time shipment updates enhance transparency and customer trust.' },
    { number: 5, title: 'Customs Compliance and Documentation', description: 'Streamline documentation and adhere to customs regulations, minimizing delays and penalties.' },
    { number: 6, title: 'Data Analytics and Reporting', description: 'Leverage data analytics for insights into shipping performance, cost analysis, and market trends.' },
  ];
}
