import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ExperiencesListComponent } from '../experiences-list/experiences-list.component';
interface Project {
  title: string;
  description: string;
  link: string;
  languages: string[];
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule,ExperiencesListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  iam = "I'm Stephen Chow";

  aboutme = `    I'm a Full Stack Web Developer 😎 with expertise in frontend technologies like Angular.js
             and React.js, as well as backend development using Java Spring Boot. With experience 
             in building and optimizing RESTful APIs and banking applications, he excels in 
             database management and performance optimization. Aung holds a Bachelor's degree
              in Computer Science and has participated in the ICPC (2017, 2018). Currently,
               he is expanding his skill set at MIT, working with Docker, MySQL, MS SQL, and
                PostgreSQL.`;

  projects: Project[] = [
    {
      title: 'Project Title 1',
      description: 'Short description of Project 1.',
      link: 'https://link-to-project1.com',
      languages: ['JavaScript', 'Angular']
    },
    {
      title: 'Project Title 2',
      description: 'Short description of Project 2.',
      link: 'https://link-to-project2.com',
      languages: ['JavaScript', 'Angular']
    },
    {
      title: 'Project Title 3',
      description: 'Short description of Project 3.',
      link: 'https://link-to-project3.com',
      languages: ['JavaScript', 'Angular']
    },
    {
      title: 'Project Title 4',
      description: 'Short description of Project 4.',
      link: 'https://link-to-project4.com',
      languages: ['JavaScript', 'Angular']
    },
    {
      title: 'Project Title 4',
      description: 'Short description of Project 4.',
      link: 'https://link-to-project4.com',
      languages: ['JavaScript', 'Angular']
    },
    {
      title: 'Project Title 4',
      description: 'Short description of Project 4.',
      link: 'https://link-to-project4.com',
      languages: ['JavaScript', 'Angular']
    },
  ];


}
