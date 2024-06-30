import { Component } from '@angular/core';

@Component({
  selector: 'app-volunteering',
  templateUrl: './volunteering.component.html',
  styleUrls: ['./volunteering.component.css']
})
export class VolunteeringComponent {
  volunteeringActivities = [
    {
      title: 'Times Ascent JOB FAIR Volunteer',
      date: '29th of July 2017',
      organization: 'The Times Of India',
      description: 'Volunteered to support candidates visiting the campus for recruitment drives held at Vemana Institute of Technology sponsored by The Times of India.',
      logo: 'assets/volunteering/times_of_india_logo.jpg' 
    },
    {
      title: 'Rally for Rivers',
      date: 'September 2017',
      organization: 'Isha Foundation',
      description: 'Volunteered to support the program launched by Isha Foundation to save India\'s rivers.',
      logo: 'assets/volunteering/rallyforrivers.jpg' // Update with actual path
    }
  ];
}
