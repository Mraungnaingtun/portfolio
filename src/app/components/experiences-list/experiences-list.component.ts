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
        "Designing and developing RESTful APIs for banking applications while optimizing database",
        "My role also involved documenting technical specifications and collaborating with ",
        "As a Frontend Developer using Angular, I built dynamic web applications, ensured smooth ",
        "I have also managed databases, proficient in designing and optimizing systems across ",
        "Developed robust backend core API services for external clients, incorporating rigorous "
      ],
      technologies: ['Java', 'Angular', "Ms SQL", "Postgres"]
    },
  ];
}
