import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';
import {PostService} from "../post.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  posts: Post[];
  searchText: string;

  constructor(
    private router: Router,
    private postService: PostService,
    private route: ActivatedRoute

  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.posts = [] as Post[];
    this.searchText = "";
  }

  ngOnInit() {
    this.searchText = '';
    this.route.queryParams.subscribe(params => {
      this.searchText = params['searchText'];
    });
    console.log(this.searchText);
    this.getPosts();
  }

  private getPosts() {
    this.postService.getPostList(this.searchText).subscribe((posts) => {
      this.posts = posts;
    });
  }
  showDetails(id: number) {
    this.router.navigate(['news/'+id])
  }

}
