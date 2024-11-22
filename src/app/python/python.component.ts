import { Component } from '@angular/core';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent {

  pythonOfferings = [
    {
      number :1,
      title: 'Custom Application Development',
      description: 'Tailored solutions built using Python to address unique business challenges.'
    },
    {
      number :2,
      title: 'Data Processing and ETL',
      description: 'Efficiently extract, transform, and load data to optimize your data workflows.'
    },
    {
      number :3,
      title: 'Testing and Quality Assurance',
      description: 'Comprehensive testing services to ensure high-quality, reliable Python applications.'
    },
    {
      number :4,
      title: 'Maintenance and Support',
      description: 'Ongoing support to ensure your Python applications run smoothly and adapt to evolving business needs.'
    },
    {
      number :5,
      title: 'Consultation and Training',
      description: 'Expert guidance on Python implementation and training for your teams to harness its full potential.'
    }
   
  ];
  pythonExpertise = [
    {
      title: 'Web Development',
      description: 'We create dynamic and responsive web applications using popular frameworks like Django and Flask, ensuring a robust user experience.'
    },
    {
      title: 'Data Science and Analytics',
      description: 'Our data science experts utilize Python’s libraries, such as Pandas and NumPy, to extract insights and drive informed business strategies.'
    },
    {
      title: 'Machine Learning and AI',
      description: 'Harness the power of machine learning with Python libraries like TensorFlow and Scikit-Learn to develop intelligent solutions that evolve with your business.'
    },
    {
      title: 'Automation and Scripting',
      description: 'Automate repetitive tasks and streamline workflows with custom scripts, enhancing productivity and efficiency.'
    },
    {
      title: 'API Development',
      description: 'We build and integrate APIs that allow for seamless communication between different software systems, enhancing interoperability.'
    }
];
}
 
