import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mat-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './mat-toolbar.component.html',
  styleUrl: './mat-toolbar.component.scss'
})
export class MatToolbarComponent {
  menuItems = [
    {
      label: 'Home',
      link: '/'
    },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: '/contact' },
  ];

  theme = 'dark';

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('light-theme', this.theme === 'light');
  }
}
