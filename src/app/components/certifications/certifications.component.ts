import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-certifications',
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  certificate = [
    {
      title: 'Angular Developer Certification',
      organization: 'Coursera',
      issueDate: 'June 2023',
      image: 'assets/certificates/angular.jpg', // Update with your image path
      link: 'https://www.example.com/angular-certificate' // Link to certificate
    },
    {
      title: 'Web Development Bootcamp',
      organization: 'Udemy',
      issueDate: 'March 2023',
      image: 'assets/certificates/webdev.jpg', // Update with your image path
      link: 'https://www.example.com/webdev-certificate'
    },
    {
      title: 'Basic CSharp Programming',
      organization: 'Infosys',
      issueDate: 'November 25, 2022',
      image: 'assets/certificates/webdev.jpg', // Update with your image path
      link: 'assets/certificate/basicCsharp.pdf'
    },
    {
      title: 'Web Development Bootcamp',
      organization: 'Udemy',
      issueDate: 'March 2023',
      image: 'assets/certificates/webdev.jpg', // Update with your image path
      link: 'https://www.example.com/webdev-certificate'
    },
    {
      title: 'Web Development Bootcamp',
      organization: 'Udemy',
      issueDate: 'March 2023',
      image: 'assets/certificates/webdev.jpg', // Update with your image path
      link: 'https://www.example.com/webdev-certificate'
    },
    {
      title: 'Web Development Bootcamp',
      organization: 'Udemy',
      issueDate: 'March 2023',
      image: 'assets/certificates/webdev.jpg', // Update with your image path
      link: 'https://www.example.com/webdev-certificate'
    }
    // Add more certificates as needed
  ];
}