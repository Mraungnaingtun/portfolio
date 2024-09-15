import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExperiencesListComponent } from '../experiences-list/experiences-list.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ContactsComponent } from '../contacts/contacts.component';
interface Project {
  title: string;
  development:  string;
  description: string;
  link: string;
  languages: string[];
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ExperiencesListComponent, NavbarComponent,ContactsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  iam = "I'm Aung Naing Tun";

  aboutme = `I'm a Full Stack Web Developer 😎 with expertise in frontend technologies like Angular.js
             and React.js, as well as backend development using Java Spring Boot. With experience 
             in building and optimizing RESTful APIs and banking applications, holds a Bachelor's degree
              in Computer Science and has participated in the ICPC (2017, 2018).`;

  projects: Project[] = [
    {
      title: 'E-commerce Platform',
      development:'Frontend',
      description: 'A brief overview of an online store platform, including its purpose and key features.',
      link: 'https://github.com/Mraungnaingtun/portfolio',
      languages: ['Java', 'Angular']
    },
    {
      title: 'Project Management Tool',
      development:'Backend',
      description: 'A short summary of a tool designed for managing team projects and tasks efficiently.',
      link: 'https://github.com/Mraungnaingtun/portfolio',
      languages: ['Java', 'Angular']
    },
    {
      title: 'Social Media Dashboard',
      development:'Full Stack',
      description: 'A concise description of a dashboard for monitoring social media metrics and activity.',
      link: 'https://github.com/Mraungnaingtun/portfolio',
      languages: ['JavaScript', 'React']
    },
    {
      title: 'Portfolio Website',
      development:'Frontend',
      description: 'A quick introduction to a personal portfolio website showcasing projects and skills.',
      link: 'https://github.com/Mraungnaingtun/portfolio',
      languages: ['HTML', 'Angular']
    },
    {
      title: 'Real-Time Chat App',
      development:'Frontend',
      description: 'An overview of a real-time chat application with features like messaging and notifications.',
      link: 'https://github.com/Mraungnaingtun/portfolio',
      languages: ['JavaScript', 'React']
    },
    {
      title: 'Employee Management System',
      development:'Frontend',
      description: 'A brief outline of a system for managing employee data, performance, and payroll.',
      link: 'https://github.com/Mraungnaingtun/portfolio',
      languages: ['Spring Boot', 'React']
    },
  ];



  getColors(language: string) {
    if (language) {
      return language.toLowerCase().replace(/\s+/g, '-');
    }
    return '';
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

  getCapital(title : string){
    return title.toUpperCase();
  }


}
