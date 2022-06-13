import { Component } from '@angular/core';
import { Report } from '../models/Report';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css'],
})
export class ReportListComponent {
  reports: Report[] = [
    {
      name: 'Doug',
      date: '02/18/2022',
      vibe: 3,
      description:
        'Slope conditions were pretty good overall. Got there for first tracks and the corduroy was great. It got very busy around lunch time, I guess the holiday crowds are showing up early. Was pretty tracked out by 11am. Left around noon because it was a 15+ minute wait for the lifts.',
    },
    {
      name: 'skibro',
      date: '02/16/2022',
      vibe: 7,
      description:
        'It was pretty icy all day but there was no one here! I got like 20 runs in by lunch. No lines for beers either!',
    },
    {
      name: 'John P',
      date: '02/15/2022',
      vibe: 5,
      description: 'Icy but fun night skiing.',
    },
    {
      name: 'Shredder Girl',
      date: '02/14/2022',
      vibe: 10,
      description:
        "BF and I came here for Valentine's Day! We got the first tracks on Snowbird and were pretty much by ourselves until 10. We chilled and had lunch and some drinks at the bar until it started to die down again at 3. Then we ripped it up all night! Got a little icy towards the end but the night vibes were super chill. Everyone was just out there to have a good time! We will defintely be back.",
    },
  ];
}
