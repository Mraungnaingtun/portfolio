import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExperiencesListComponent } from '../experiences-list/experiences-list.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { MatButtonModule } from '@angular/material/button';
interface Project {
  title: string;
  development: string;
  description: string;
  link: string;
  languages: string[];
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ExperiencesListComponent,
    NavbarComponent,
    ContactsComponent,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  iam = "Aung Naing Tun";

  aboutme = `I'm a Full Stack Web Developer 😎 and proficient in building scalable and efficient web solutions.
   I enjoy collaborating with cross-functional teams to create innovative software solutions that meet user needs.
   I have accumulated ${this.calculateYearMonth()} of professional experience.I love latest technologies.`;

  github_link = 'https://github.com/Mraungnaingtun';

  projects: Project[] = [
    {
      title: 'Mini Banking API',
      development: 'Backend',
      description: 'Banking Management System with unit test and integration test.',
      link: 'https://github.com/Mraungnaingtun/banking-unit-test',
      languages: ['Spring Boot','JUnit5','Postgres']
    },
    {
      title: 'Spring CRUD with Thymeleaf',
      development: 'Full Stack',
      description: 'Building a CRUD application based on the MVC framework, leveraging Thymeleaf for user interface management.',
      link: 'https://github.com/Mraungnaingtun/spring-crud-thymeleaf',
      languages: ['Spring Boot', 'Mysql', 'Thymeleaf']
    },
    {
      title: 'Myanmar Gold Calculator',
      development: 'Frontend',
      description: 'Calculator of gold with Myanmar Measurement (Kyat,Pay,Roy) currently used by many users with a mobile app',
      link: 'https://github.com/Mraungnaingtun/shwe',
      languages: ['React']
    },
    {
      title: 'Oauth2 Resource Server',
      development: 'Backend',
      description: 'Authentication and Authorization with latest spring version and spring security version',
      link: 'https://github.com/Mraungnaingtun/oauth2-resource-server',
      languages: ['Spring Boot', 'Postgres']
    },
    {
      title: 'Angular API Call',
      development: 'Frontend',
      description: 'Project with api calling using angular with simple and better way with DTO',
      link: 'https://github.com/Mraungnaingtun/api-call-in-angular',
      languages: ['Spring Boot', 'React']
    },
    {
      title: 'Portfolio Website',
      development: 'Frontend',
      description: 'A quick introduction to a personal portfolio website showcasing projects and skills.',
      link: 'https://github.com/Mraungnaingtun/portfolio',
      languages: ['Angular']
    },
  ];

  goToGitHub(link: string) {
    window.open(link, '_blank');
  }



  downloadCV() {
    const cvUrl = 'assets/cv.pdf';
    const a = document.createElement('a');
    a.href = cvUrl;
    a.download = 'aungnaingtun.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  getGreeting(): string {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return "morning";
    } else if (currentHour < 18) {
      return "afternoon";
    } else {
      return "evening";
    }
  }

  getCapital(title: string) {
    return title.toUpperCase();
  }

  calculateYearMonth(): string {
    const start = new Date('2022-10-01');
    const today = new Date();

    let years = today.getFullYear() - start.getFullYear();
    let months = today.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;

  }
}