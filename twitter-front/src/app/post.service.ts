import { Injectable } from '@angular/core';
import {Post} from "./models/post";
import {Media} from "./models/media";
import {Tweet} from "./models/tweet";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [
    {
      id: 1,
      username: "GOAL",
      body: "Khadija Shaw and Erling Haaland have been unstoppable for Man City this season 🔥",
      medias: [
        {
          url: "https://pbs.twimg.com/media/FstOeKSXwAIrr0V?format=jpg&name=small",
        }
      ] as Media[]
    },
    {
      id: 2,
      username: "Manchester City",
      body: "🌟 𝑺𝒖𝒑𝒆𝒓 𝑱𝒂𝒄𝒌 🌟",
      medias: [
        {
          url: "https://pbs.twimg.com/media/FssnhA2WcAA5Uzh?format=jpg&name=small",
        },

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
        }
      ] as Media[]
    },
  ] as Post[];

  comments: Tweet[] = [
    {
      username: "𝐊𝐮𝐫𝐚𝐲𝐚𝐦𝐢",
      body: "Was your GOAT doing this at his age?",
    },
    {
      username: "𝐊𝐮𝐫𝐚𝐲𝐚𝐦𝐢",
      body: "Was your GOAT doing this at his age?",
    },
    {
      username: "𝐊𝐮𝐫𝐚𝐲𝐚𝐦𝐢",
      body: "Was your GOAT doing this at his age?",
    },
    {
      username: "𝐊𝐮𝐫𝐚𝐲𝐚𝐦𝐢",
      body: "Was your GOAT doing this at his age?",
    },
  ] as Tweet[];


  BASE_URL="http://localhost:8000"
  constructor(
    private client: HttpClient
  ) { }

  getPostList() {
    return this.client.get<Post[]>(`${this.BASE_URL}/api/news/`);
  }

  getPostById(id: Number) {
    return this.posts.find(post => post.id === id)
  }

  getTweets() {
    return this.comments;
  }
}
