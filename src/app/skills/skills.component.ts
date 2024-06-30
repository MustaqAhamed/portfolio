<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
>>>>>>> 6bcd10d (Beta commit of portfolio project)

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
<<<<<<< HEAD
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

=======
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('skillAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class SkillsComponent {
  skills = [
    {
      name: 'Frontend Development',
      items: ['HTML', 'CSS', 'Bootstrap', 'JSP', 'Angular', 'React']
    },
    {
      name: 'Backend Development',
      items: ['Java', 'Advanced Java', 'Python']
    },
    {
      name: 'Database',
      items: ['MySQL', 'Oracle', 'MongoDB', 'phpMyAdmin']
    },
    {
      name: 'Artificial Intelligence',
      items: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Wit.ai', 'Chatbot development']
    },
    {
      name: 'Automation',
      items: ['VBA programming']
    },
    {
      name: 'Cloud',
      items: ['Salesforce administration']
    }
  ];
>>>>>>> 6bcd10d (Beta commit of portfolio project)
}
