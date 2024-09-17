import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExperiencesListComponent } from '../experiences-list/experiences-list.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ProjectComponent } from '../project/project.component';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarComponent } from '../mat-toolbar/mat-toolbar.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ExperiencesListComponent,
    NavbarComponent,
    ContactsComponent,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    ProjectComponent,
    MatCardModule,
    MatToolbarComponent
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