import { Injectable } from '@angular/core';
import {Post} from "./models/post";
import {Media} from "./models/media";
import {Tweet} from "./models/tweet";
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
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

  updatePost(id: number, postBody: { body: string; medias: string[]; username: string | null; }) {
    return this.client.put<Post>(`${this.BASE_URL}/api/news/${id}/`, postBody);
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
