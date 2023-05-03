import { Injectable } from '@angular/core';
import {Post} from "./models/post";
import {Media} from "./models/media";
import {Tweet} from "./models/tweet";
import { HttpClient, HttpParams } from '@angular/common/http';

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

  getPostList(searchText: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("search",searchText);
    return this.client.get<Post[]>(`${this.BASE_URL}/api/news/`, {params: queryParams});
  }

  createPost(postBody: { body: string; medias: string[]; username: string | null; }) {
    return this.client.post<Post>(`${this.BASE_URL}/api/news/`, postBody);
  }

  getPostById(id: Number) {
    return this.client.get<Post>(`${this.BASE_URL}/api/news/${id}`);
  }

  deletePost(id: Number) {
    return this.client.delete<string>(`${this.BASE_URL}/api/news/${id}`);
  }

  getPostUsername(id: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this.client.get<Post[]>(`${this.BASE_URL}/api/profile-post`, {params: queryParams});
  }

  getTweets(id: number) {
    return this.client.get<{tweets:Tweet[]}>(`${this.BASE_URL}/api/post/${id}/tweets`);
  }

  postTweet(tweet: Tweet, post_id: number) {
    let body = tweet.body
    let profilePicture = tweet.profilePicture
    let username = tweet.username
    return this.client.post<{success: Boolean}>(`${this.BASE_URL}/api/post/${post_id}/tweets/create/`,{body,profilePicture,username})
  }

  updateTweet(tweet: Tweet, post_id: number) {
    let body = tweet.body
    let profilePicture = tweet.profilePicture
    let username = tweet.username
    console.log(tweet.id)
    return this.client.put<{success: Boolean}>(`${this.BASE_URL}/api/post/${post_id}/tweets/update/${tweet.id}`,{body,profilePicture,username})
  }

  deleteTweet(tweet_id: number, post_id:number) {
    return this.client.delete<{success: Boolean}>(`${this.BASE_URL}/api/post/${post_id}/tweets/update/${tweet_id}`,{})
  }
}
