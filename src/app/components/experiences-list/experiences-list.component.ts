import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-experiences-list',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './experiences-list.component.html',
  styleUrl: './experiences-list.component.scss'
})
export class ExperiencesListComponent {

  experiences =
    {
      jobTitle: "Full Stack Web Developer - MIT",
      fromDate: "October 2022",
      toDate: "Present",
      responsibilities: {
        backend: {
          technologies: ['Java', 'Spring Boot', 'Azure Function', 'Docker'],
          responsibilities: [
            "Maintain and develop core banking services (Java, Spring Boot).",
            "Mobile banking API service that integrates with multiple banks(Java).",
            "Mobile Admin Console backend services(Java Azure Functions,Node.js)",
            "Maintain BFF Services (Spring Boot)",
            "Report Services (JSP,Jasper Report Server)",
            "Setup  and Deploy Services to Azure Cloud using Docker.",
            "Implement authentication, authorization, and data protection.",
            "Optimize server performance (Load testing , Concurrent Testing)"
          ]
        },
        frontend: {
          technologies: ['Angular','Html','Css','JavaScript'],
          responsibilities: [
            "Core Banking System .",
            "Mobile Banking Admin Console .",
            "Collaborated with designers to implement designs",
            "Matain and Develop mobile banking App (Flutter).",
            "Develop Activity Management System Dashboard (Angular).",
            "Integrated RESTful APIs to fetch and display data",
            "Implemented responsive design principles for various screen sizes",
            "Improved application performance"
          ]
        },
        database: {
          technologies: ['MS SQL', 'PostgreSQL','MongoDB'],
          responsibilities: [
           "Optimized database queries and schemas",
            "Designed relational databases for banking systems",
            "Improved SQL query performance for high-volume data",
            "Worked with NoSQL databases",
            "Optimize queries and indexes for better performance.",
            "Migrated data between different database systems",
            "Documented database schemas",
          ]
        },
      }
    };
}
