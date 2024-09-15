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
      jobTitle: "Full Stack Web Developer - MIT",
      fromdate: "October 2022",
      todate: "Present",
      responsibilities: [
        "Maintain and Develop Core Banking APIs",
        "My role also involved documenting technical specifications and collaborating with stakeholders to meet business needs.",
        "As a Frontend Developer using Angular, I built dynamic web applications, ensured smooth API integration, and improved performance..",
        "I have also managed databases, proficient in designing and optimizing systems across MSSQL and PostgreSQL.",
        "Developed robust backend core API services for external clients, incorporating rigorous load testing to ensure optimal performance."
      ],
      technologies: ['Java', 'Angular', "Ms SQL", "Postgres"]
    },
  ];
}
