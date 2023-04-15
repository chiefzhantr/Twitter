import { Component, OnInit} from '@angular/core';
import { Post } from '../models/post';
import {PostService} from "../post.service";
import {ActivatedRoute} from "@angular/router";
import { Tweet } from '../models/tweet';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post = {} as Post;
  tweets = [] as Tweet[];
  showTweets = 'show Tweets';

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) {
  }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('postId'));

    // Find the product that correspond with the id provided in route.
    this.post = this.postService.getPostById(productIdFromRoute) as Post;
  }

  clickTweets() {
    if (this.tweets.length == 0) {
      this.tweets = this.postService.getTweets();
      this.showTweets = 'hide Tweets'
    } else {
      this.tweets = []
      this.showTweets = 'show Tweets';
    }
  }
}
