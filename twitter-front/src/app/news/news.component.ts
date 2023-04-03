import { Component } from '@angular/core';
import { Media } from '../media';
import { Post } from '../post';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  posts: Post[];

  constructor() {
    this.posts = [
      {
        id: 1,
        username: "GOAL",
        body: "Khadija Shaw and Erling Haaland have been unstoppable for Man City this season 🔥",
        medias: [
          {
            url: "https://pbs.twimg.com/media/FstOeKSXwAIrr0V?format=jpg&name=small",
            type: true,
          }
        ] as Media[]
      },
      {
        id: 2,
        author_username: "Manchester City",
        body: "🌟 𝑺𝒖𝒑𝒆𝒓 𝑱𝒂𝒄𝒌 🌟",
        medias: [
          {
            url: "https://pbs.twimg.com/media/FssnhA2WcAA5Uzh?format=jpg&name=small",
            type: true,
          }
        ] as Media[]
      },
      {
        id: 3,
        username: "아니사 🍒|| fml era✨",
        body: "Staff : Get ready for a comeback later\n" +
          "Woozi : When? Don't be sudden..\n" +
          "Staff : In April\n" +
          "Woozi & svt members: AH... FxCK MY LIFE\n",
        medias: [
          {
            url: "https://pbs.twimg.com/media/FsuGJcYaMAADre6?format=jpg&name=small",
            type: true,
          }
        ] as Media[]
      },
    ] as Post[];
  }
}
