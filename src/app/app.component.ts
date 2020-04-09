import { Component } from '@angular/core';
import { YoutubeSearchService } from './services/youtube-search-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SegFyYoutube';

  constructor(private youtubeService: YoutubeSearchService) { }

}
