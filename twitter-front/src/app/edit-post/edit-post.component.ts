import { Component } from '@angular/core';

import {ApiService} from "../api.service";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {

  constructor(
    // private apiService: ApiService
  ) {
  }

  deletePost() {
  //   this.apiService.deletePost(post.id).subs
  }

  updatePost() {
//   this.apiService.updatePost(post.id).
  }
}
