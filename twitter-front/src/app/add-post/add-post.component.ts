import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../post.service";
import { Post } from '../models/post';
import { Media } from '../models/media';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  // post: Post;
  bodyValue: string;
  media_list: string[];

  constructor(
    private router: Router,
    private postService: PostService
  ) {
    this.bodyValue = "";
    this.media_list = [];
  }
  ngOnInit(): void {
    this.bodyValue = "";
    this.media_list = [];
  }

  addPost() {
    const bodyField = document.getElementById('body') as HTMLTextAreaElement;
    const newBodyValue = bodyField.value.trim();

    if (!newBodyValue) {
      alert('You cannot change nothing. If you want to quit, use the sidebar.');
      return;
    }
    console.log(this.media_list);
    const post = {
      "body": newBodyValue,
      "medias": this.media_list,
      "username": localStorage.getItem('username'),
    };
    console.log(post);
    this.postService.createPost(post).subscribe((data)=>{
      return post
    })
    this.router.navigate(['profile/'+localStorage.getItem('id')],)
  };

  addMedia() {
    const bodyField = document.getElementById('tweet-body') as HTMLTextAreaElement;
    const bodyValue = bodyField.value.trim();
    if (!bodyValue) {
      alert('You cannot leave nothing, type something');
      return;
    }
    this.media_list.push(bodyValue);
    bodyField.value = "";
  }
}
