import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SettingsService} from "../settings/settings.service";
import {PostService} from "../post.service";
import { Post } from '../models/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  // post: Post;
  bodyValue: string;
  mediaUrlValue: string;

  constructor(
    // private apiService: ApiService
    private postService: PostService
  ) {
    this.bodyValue = "123";
    this.mediaUrlValue = "";
  }
  ngOnInit(): void {
  }

  addPost() {
    const bodyField = document.getElementById('body') as HTMLTextAreaElement;
    const mediaUrlField = document.getElementById('mediaurl') as HTMLTextAreaElement;
    const newBodyValue = bodyField.value.trim();
    const newMediaUrlValue = mediaUrlField.value.trim();

    if (!newBodyValue && !newMediaUrlValue) {
      alert('You cannot change nothing. If you want to quit, use the sidebar.');
      return;
    }

    let post = {
      "body": newBodyValue,
      "username": localStorage.getItem('username'),
    } as Post;
    console.log(post)

    if (!newBodyValue) {
      bodyField.value = this.bodyValue;
    }

    if (!newMediaUrlValue) {
      mediaUrlField.value = this.mediaUrlValue;
    }
  };
}
