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
          technologies: ['Java', 'Spring Boot', 'Azure Function', 'Docker'],
          responsibilities: [
            "Built and maintained secure, high-performance banking and other systems",
            "Developed microservices for high-volume transactions",
            "Implemented data encryption and secure authentication",
            "Performance Testing(Load Testing, Stress Testing,...)",
            "CI/CD on cloud platforms with Docker" 
          ]
        },
        frontend: {
          technologies: ['Angular','Html','Css','JavaScript'],
          responsibilities: [
            "Developed web applications for international clients",
            "Created responsive and user-friendly interfaces",
            "Collaborated with designers to implement designs",
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
            "Migrated data between different database systems",
            "Documented database schemas",
          ]
        },
      }
    };
}
