import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-edu-skill',
  standalone: true,
  imports: [MatChipsModule,CommonModule,MatDividerModule],
  templateUrl: './edu-skill.component.html',
  styleUrl: './edu-skill.component.scss'
})
export class EduSkillComponent {

  skills: string[] = [
    "Java Spring Boot",
    // "Azure Functions with Java",
    "Angular.js",
    "JavaScript",
    "TypeScript",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "MS SQL",
    "Docker",
    "HTML",
    "CSS",
    "SCSS",
    "JavaScript"
  ];

}
