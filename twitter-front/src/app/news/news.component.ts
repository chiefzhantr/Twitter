import { Component, OnInit } from '@angular/core';
import { Media } from '../models/media';
import { Post } from '../models/post';
import {PostService} from "../post.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  posts: Post[];

  constructor(
    private postService: PostService
  ) {
    this.posts = [] as Post[];
  }

  ngOnInit() {
    this.posts = this.postService.getPostList()
  }
}
