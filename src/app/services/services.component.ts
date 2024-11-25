import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

  export class ServicesComponent implements OnInit {
    currentSlide = 0;
    isSliderVisible = true; // Set slider visibility to true by default

    // Service groups array with service objects
    serviceGroups = [
      [
        { icon: 'assets/SERVICES/AWS Cloud.jpg', title: 'AWS CLOUD', description:'AWS (Amazon Web Services) is a comprehensive cloud platform offering a wide range of services, including computing power, storage, and databases, to help businesses scale and innovate. ' },
        { icon: './assets/SERVICES/Azure Cloud.jpg', title: 'AZURE', description:'Azure is Microsoft`s cloud computing platform that offers a variety of services, including virtual machines, databases, and AI tools, to help businesses build, manage, and deploy applications.' },
        { icon: './assets/SERVICES/Business Analyst.jpg', title: 'BUSINESS ANALYST', description:'A Business Analyst bridges the gap between business needs and technical solutions by analyzing processes, identifying requirements, and recommending data-driven improvements.'}
      ],
      [
        { icon: './assets/SERVICES/Cyber Security.jpg', title: ' CYBER SECURITY', description:'Cybersecurity involves protecting systems, networks, and data from digital attacks, theft, and damage. It includes practices like encryption, firewalls, and threat detection to ensure the confidentiality, integrity, and availability of information.' },
        { icon: './assets/SERVICES/Data Analyst.jpg', title: ' DATA ANALYST', description:'A Data Analyst collects, processes, and interprets data to help businesses make informed decisions. They use statistical tools and techniques to identify trends, patterns, and insights that drive business strategies and improvements.'},
        { icon: './assets/SERVICES/Data Engineering.jpg', title: 'DATA ENGINEERING', description:'Data Engineering focuses on designing, building, and maintaining systems for collecting, storing, and processing large datasets. It involves creating data pipelines, ensuring data reliability, and optimizing infrastructure to support data analysis and machine learning.' }
      ],
      [
        { icon: './assets/SERVICES/Data Science.jpg', title: 'DATA SCIENCE', description:'Data Science combines statistical analysis, machine learning, and domain expertise to extract insights from structured and unstructured data. It involves building predictive models, identifying patterns, and solving complex problems to guide decision-making and drive innovation.' },
        { icon: './assets/SERVICES/DevOps.jpg', title: 'DEVOPS', description:'DevOps is a set of practices that integrates software development (Dev) and IT operations (Ops) to streamline the software delivery process. It emphasizes collaboration, automation, and continuous integration/continuous deployment (CI/CD) to improve efficiency, speed, and quality of product releases.' },
        { icon: './assets/SERVICES/Digital Marketing.jpg', title: ' DIGITAL MARKETING', description:'Digital Marketing involves promoting products or services using online channels such as social media, search engines, email, and websites. It focuses on targeting audiences, driving engagement, and optimizing campaigns to increase brand visibility, customer acquisition, and sales.' }
      ],
      [
        { icon: './assets/SERVICES/E-commerce Development.jpg', title: 'E-COMMERCE DEVELOPMENT', description:'E-commerce development involves creating online platforms that enable businesses to sell products or services digitally. It includes building user-friendly websites, integrating payment gateways, and optimizing for secure transactions and a seamless shopping experience.' },
        { icon: './assets/SERVICES/Google Cloud.jpg', title: 'GOOGLE CLOUD', description:'Google Cloud is a suite of cloud computing services offered by Google that provides infrastructure, platform, and application solutions for businesses. It includes tools for data storage, machine learning, big data analytics, and application development, enabling organizations to build, scale, and innovate in the cloud.' },
        { icon: './assets/SERVICES/Java Full Stack Development.jpg', title: 'JAVA FULL STACK DEVELOPMENT ', description:'Java Full Stack Development refers to the end-to-end development of web applications using Java technologies for both the front-end and back-end. This involves utilizing frameworks like Spring and Hibernate for server-side development and tools like JavaServer Faces (JSF) or Angular for creating interactive user interfaces, enabling developers to manage the entire application lifecycle.' }
      ],
      [
        { icon: './assets/SERVICES/Linus.jpg', title: 'LINUX', description:'Linux is an open-source operating system kernel that serves as the foundation for various distributions, enabling users to customize their computing environments. Known for its stability, security, and flexibility, Linux powers servers, desktops, and embedded systems worldwide.'},
        { icon: './assets/SERVICES/Mobile App Development 1.jpg', title: 'MOBILE APP DEVELOPMENT', description:'Mobile app development involves creating software applications specifically designed for mobile devices, such as smartphones and tablets. It encompasses various stages, including ideation, design, coding, testing, and deployment, utilizing platforms like Android and iOS to reach a wide audience.' },
        { icon: './assets/SERVICES/Power BI.jpg', title: 'POWER BI', description:'Power BI is a business analytics tool by Microsoft that enables users to visualize and share insights from their data through interactive dashboards and reports. It allows for seamless data integration from various sources, empowering organizations to make data-driven decisions with real-time analytics and intuitive visualizations.' }
      ],
      [
        { icon: './assets/SERVICES/Python.jpg', title: 'PYTHON', description:'Python is a high-level, versatile programming language known for its simplicity and readability, making it a popular choice for beginners and experienced developers alike. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming, and is widely used in fields such as web development, data science, and automation.' },
        { icon: './assets/SERVICES/Responsive UIUX.jpg', title: 'UI/UX', description:'UI/UX refers to User Interface (UI) and User Experience (UX) design, focusing on creating intuitive and engaging digital products. UI design emphasizes the look and feel of an application, while UX design concentrates on optimizing the overall experience and usability for the user, ensuring satisfaction and ease of use.' },
        { icon: './assets/SERVICES/SAP.jpg', title: 'SAP', description:'SAP (Systems, Applications, and Products) is a leading enterprise resource planning (ERP) software that integrates various business processes, including finance, supply chain, and human resources, into a unified system. ' }
      ],
      [
        { icon: './assets/SERVICES/Software Developer.jpg', title: 'SOFTWARE DEVELOPER', description:'A Software Developer is a professional who designs, builds, tests, and maintains software applications and systems to meet user needs and business requirements. They utilize programming languages, frameworks, and development tools to create functional and efficient code, collaborating with teams to deliver high-quality software solutions.' },
        { icon: './assets/SERVICES/Software Testing.jpg', title: 'SOFTER TESTING', description:'Software Testing is the process of evaluating and verifying that a software application or system meets specified requirements and functions correctly. It involves various techniques, including manual testing and automated testing, to identify defects, ensure quality, and enhance user satisfaction before the software is released.' },
        { icon: './assets/SERVICES/Website Development.jpg', title: 'WEBSITE DEVELOPMENT', description:'Website development involves the creation and maintenance of websites, encompassing everything from web design and content creation to programming and database management. It utilizes various technologies and languages, such as HTML, CSS, JavaScript, and server-side languages, to build user-friendly and responsive web experiences that meet business goals.' }
      ],

    ];
  group: any;
    slideInterval: any| undefined;

  ngOnInit(): void {
    this.isSliderVisible = true; // Show slider when the component is initialized
    this.startSlideShow(); // Start the automatic slider
  }

  // Method to update the current slide
  goToSlide(slideIndex: number) {
    this.currentSlide = slideIndex;
    this.resetSlideShow(); // Reset the automatic slider when user interacts
  }

  // Calculate the transform property for sliding effect
  getTransform() {
    return `translateX(-${this.currentSlide * 100}%)`;
  }

  // Start automatic sliding
  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.serviceGroups.length; // Move to next slide
    }, 5000); // Change every 5 seconds
  }

  // Reset the slideshow when user interacts
  resetSlideShow() {
    clearInterval(this.slideInterval); // Clear the previous interval
    this.startSlideShow(); // Start the slideshow again
  }

  ngOnDestroy(): void {
    clearInterval(this.slideInterval); // Clean up the interval when component is destroyed
  }
  }


