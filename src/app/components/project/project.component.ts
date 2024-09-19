import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';

interface Project {
  title: string;
  development: string;
  description: string;
  link: string;
  languages: string[];
}

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule,MatChipsModule,MatCardModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  
})
export class ProjectComponent {

  projects: Project[] = [
    {
      title: 'Banking & unit test',
      development: 'Backend',
      description: 'Banking Management System with unit test and integration test.',
      link: 'https://github.com/Mraungnaingtun/banking-unit-test',
      languages: ['Spring Boot', 'JUnit5', 'Postgres']
    },
    {
      title: 'Spring CRUD & thymeleaf',
      development: 'Full Stack',
      description: 'Building a CRUD application based on the MVC framework, leveraging Thymeleaf for user interface management.',
      link: 'https://github.com/Mraungnaingtun/spring-crud-thymeleaf',
      languages: ['Spring MVC', 'Mysql', 'Thymeleaf']
    },
    {
      title: 'Myanmar Gold Calculator',
      development: 'Frontend',
      description: 'Calculator of gold with Myanmar Measurement (Kyat,Pay,Roy) currently used by many users with a mobile app',
      link: 'https://github.com/Mraungnaingtun/shwe',
      languages: ['React','Material UI']
    },
    {
      title: 'Oauth2 Resource Server',
      development: 'Backend',
      description: 'Authentication and Authorization with latest spring version and spring security version',
      link: 'https://github.com/Mraungnaingtun/oauth2-resource-server',
      languages: ['Spring Boot','JWT' ,'Postgres']
    },
    {
      title: 'Angular & api calling',
      development: 'Frontend',
      description: 'Project with api calling using angular with simple and better way with DTO',
      link: 'https://github.com/Mraungnaingtun/api-call-in-angular',
      languages: ['Spring Boot', 'Angular']
    },
    {
      title: 'Portfolio Website',
      development: 'Frontend',
      description: 'A quick introduction to a personal portfolio website showcasing projects and skills.',
      link: 'https://github.com/Mraungnaingtun/portfolio',
      languages: ['Angular','Firebase']
    },
    {
      title: 'Docker @ Backend',
      development: 'Backend',
      description: 'Basic Setup Docker to host in Render Website.',
      link: 'https://github.com/Mraungnaingtun/docker-testing.git',
      languages: ['Spring Boot','Docker']
    },
  ];

  
  
  getCapital(title: string) {
    return title.toUpperCase();
  }
}
