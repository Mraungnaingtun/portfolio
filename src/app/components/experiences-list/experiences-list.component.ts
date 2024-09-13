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

  experiences = [
    {
      jobTitle: "Backend Development - Java",
      responsibilities: [
        "Designed and developed RESTful APIs to support various functionalities of a banking application, ensuring reliability and efficiency.",
        "Implemented database schema and optimized SQL queries to enhance system performance and reduce response times.",
        "Documented technical specifications, API endpoints, and deployment procedures to facilitate knowledge sharing and onboarding of new team members.",
        "Worked closely with product managers and stakeholders to translate business requirements into technical specifications.",
        "Developed robust backend core API services for external clients, incorporating rigorous load testing to ensure optimal performance."
      ],
      technologies: ["MSSQL", "Postgres"]
    },
    {
      jobTitle: "Front End Development - Angular",
      responsibilities: [
        "Developed dynamic and responsive web applications using Angular framework.",
        "Worked with Angular Material to create a user-friendly interface with consistent design.",
        "Collaborated with backend teams to integrate RESTful APIs with the frontend.",
        "Optimized frontend performance for faster load times and smoother user interactions.",
        "Maintained high-quality code by using best practices such as code reviews and testing."
      ],
      technologies: ["Angular", "TypeScript", "HTML", "CSS"]
    },
    {
      jobTitle: "Database Management-Mssql/Postgres",
      responsibilities: [
        "Proficient in designing, implementing, and optimizing database systems across multiple platforms including MSSQL and PostgreSQL.",
        "Developed complex SQL queries, stored procedures, and triggers to support business logic and application functionalities.",
        "Optimized database performance by creating indexes, analyzing query execution plans, and tuning server configurations."
      ],
      technologies: ["MSSQL", "Postgres"]
    }
  ];
}
