import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences-list',
  standalone: true,
  imports: [CommonModule],
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
          technologies: ['Java', 'Spring Boot', 'MS SQL', 'PostgreSQL', 'Azure Function'],
          responsibilities: [
            "Engineered and maintained secure, high-performance core banking systems using Java and Spring Boot.",
            "Designed and implemented microservices for high-volume transaction processing with efficient data management.",
            "Built secure and scalable backend architectures to enhance system performance.",
            "Optimized database queries and schemas for MS SQL and PostgreSQL to ensure high efficiency.",
            "Ensured compliance with security standards, including data encryption, secure authentication, and robust authorization mechanisms.",
            "Deployed backend applications on cloud platforms using Docker and Azure Functions for consistent, reliable environments."
          ]
        },
        frontend: {
          technologies: ['Angular'],
          responsibilities: [
            "Collaborated with frontend developers to design APIs and data structures for seamless integration with Angular-based frontends.",
            "Ensured backend compatibility with modern web frameworks and optimized API performance for user-friendly interfaces."
          ]
        },
        database: {
          technologies: ['MS SQL', 'PostgreSQL'],
          responsibilities: [
            "Developed and managed complex relational database schemas with MS SQL and PostgreSQL to handle critical data for banking systems.",
            "Optimized SQL queries and database performance to support high transaction volumes and real-time data processing.",
            "Implemented database security features like encryption, secure storage, and fine-grained access control."
          ]
        },

        // other: {
        //   responsibilities: [
        //     "Developed and maintained activity management systems, car parking apps, and other solutions for international clients, with a focus on backend stability and performance.",
        //     "Created comprehensive technical documentation for backend system development and maintenance.",
        //     "Collaborated with cross-functional teams including database architects and frontend engineers to ensure seamless integration and optimized solutions.",
        //     "Integrated third-party systems with backend APIs for enhanced functionality."
        //   ]
        // }
      }
    };
}
