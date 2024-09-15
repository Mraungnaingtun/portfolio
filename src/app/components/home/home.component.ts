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
   I have accumulated ${this.calculateYearMonth()} of professional experience.`;

  github_link = 'https://github.com/Mraungnaingtun';

  projects: Project[] = [
    {
      title: 'E-commerce Platform',
      development: 'Frontend',
      description: 'A brief overview of an online store platform, including its purpose and key features.',
      link: 'https://github.com/Mraungnaingtun/portfolio',
      languages: ['Java', 'Angular']
    },
    {
      title: 'Project Management Tool',
      development: 'Backend',
      description: 'A short summary of a tool designed for managing team projects and tasks efficiently.',
      link: 'https://github.com/Mraungnaingtun/portfolio',
      languages: ['Java', 'Angular']
    },
    {
      title: 'Social Media Dashboard',
      development: 'Full Stack',
      description: 'A concise description of a dashboard for monitoring social media metrics and activity.',
      link: 'https://github.com/Mraungnaingtun/portfolio',
      languages: ['JavaScript', 'React']
    },
    {
      title: 'Portfolio Website',
      development: 'Frontend',
      description: 'A quick introduction to a personal portfolio website showcasing projects and skills.',
      link: 'https://github.com/Mraungnaingtun/portfolio',
      languages: ['HTML', 'Angular']
    },
    {
      title: 'Real-Time Chat App',
      development: 'Frontend',
      description: 'An overview of a real-time chat application with features like messaging and notifications.',
      link: 'https://github.com/Mraungnaingtun/portfolio',
      languages: ['JavaScript', 'React']
    },
    {
      title: 'Employee Management System',
      development: 'Frontend',
      description: 'A brief outline of a system for managing employee data, performance, and payroll.',
      link: 'https://github.com/Mraungnaingtun/portfolio',
      languages: ['Spring Boot', 'React']
    },
  ];

  goToGitHub() {
    window.open(this.github_link, '_blank');
  }



  downloadCV() {
    const cvUrl = 'assets/aungnaingtun.pdf';
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