import { Component } from '@angular/core';

interface Offering {
  number: number;
  title: string;
  description: string;
}
@Component({
  selector: 'app-consumer-electronics',
  templateUrl: './consumer-electronics.component.html',
  styleUrls: ['./consumer-electronics.component.css']
})
export class ConsumerElectronicsComponent {
  consumerelectronics: Offering[] = [];
  constructor() { }
  // OnInit lifecycle hook to initialize data
  ngOnInit(): void {
    // Populate the computingsoftware array with data
    this.consumerelectronics = [
      {
        number: 1,
        title: 'Smart Home Devices',
        description: 'Create a seamless and connected living environment with our range of smart home solutions, lighting systems, and security devices that enhance convenience and safety.'


      },
      {
        number: 2,
        title: 'Wearable Technology',
        description: 'Experience the future of health and fitness with our innovative wearable devices that track activity, monitor health metrics, and connect seamlessly to your smartphone.'

      },
      {
        number: 3,
        title: 'Portable Gadgets',
        description: 'Stay connected on the go with our portable gadgets, such as power banks, Bluetooth speakers, and mobile accessories designed for versatility and performance.'
      },
      {
        number: 4,
        title: 'Audio and Visual Equipment',
        description: 'Elevate your entertainment experience with our high-quality audio systems, headphones, and smart TVs that deliver immersive sound and stunning visuals.'
      },
      {
        number: 5,
        title: 'Gaming Solutions',
        description: 'Dive into the world of gaming with our advanced gaming peripherals and consoles that provide cutting-edge performance and an unmatched gaming experience.'
      },
      {
        number: 6,
        title: 'Health and Wellness Devices',
        description: 'Prioritize your well-being with our innovative health tech solutions, including smart scales, sleep monitors, and air quality sensors that promote a healthier lifestyle.'
      }
    ];
  }
}
