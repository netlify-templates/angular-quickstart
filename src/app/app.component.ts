import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})
export class AppComponent {
  title = 'angular-quickstart';

  projects = [
    { title: 'Project One', description: 'Description of project one.', link: 'https://example.com' },
    { title: 'Project Two', description: 'Description of project two.', link: 'https://example.com' }
  ];

  skills = ['Angular', 'HTML', 'CSS', 'JavaScript', 'TypeScript'];
}
