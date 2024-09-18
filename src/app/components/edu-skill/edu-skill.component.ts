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
    "Spring Boot , Spring MVC",
    "Azure Functions with Java",
    "Node.js, Express.js, MongoDB",
    "Angular.js, React.js",
    "MySQL, MS SQL, PostgreSQL",
    "Docker",
    "HTML, CSS, JavaScript"
  ];

}
