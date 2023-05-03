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

  addingTweet = false
  editingTweet = false;
  editingTweetId = -1;
  editedTweetBody = '';

  post = {} as Post;
  currentUsername = localStorage.getItem("username")
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
    this.postService.getPostById(productIdFromRoute) .subscribe((post) => {
      this.post = post;
    });

  }

  clickTweets() {
    if (this.tweets.length == 0) {
      this.postService.getTweets(this.post.id).subscribe((response) => {
        this.tweets = response.tweets;
      });
      this.showTweets = 'hide Tweets'
    } else {
      this.tweets = []
      this.showTweets = 'show Tweets';
    }
  }
  showAddTweet() {

    this.addingTweet = !this.addingTweet
  }
  addTweetAction() {
    const bodyField = document.getElementById('tweet-body') as HTMLTextAreaElement;
    const bodyValue = bodyField.value.trim();
    if (!bodyValue) {
      alert('You cannot leave nothing, type something');
      return;
    }
    // const author = getUser()
    const newTweet : Tweet = {
        username: localStorage.getItem("username"),
        profilePicture: "123",
        body: bodyValue
    } as Tweet

    this.postService.postTweet(newTweet, this.post.id).subscribe((response) => {
      console.log(response.success)
      if (response.success) {

        this.tweets.push(newTweet)
        this.addingTweet = !this.addingTweet
      }

    });
  }
  startEditingTweet(tweetId: number) {
    this.editingTweet = true;
    this.editingTweetId = tweetId;
    const tweetToEdit = this.tweets.find(tweet => tweet.id === tweetId);
    if (tweetToEdit) {
      this.editedTweetBody = tweetToEdit.body;
    } else {
      console.error(`Could not find tweet with id ${tweetId}`);
    }
  }
  saveEditedTweet() {
    const tweet = this.tweets.find(tweet => tweet.id === this.editingTweetId);
    if(tweet == undefined) {return}
    if(tweet.body == this.editedTweetBody || this.editedTweetBody == '') {
      alert("Type something new")
      this.editingTweet = false;
      this.editingTweetId = -1;
      return
    }
    tweet.body = this.editedTweetBody;

    this.postService.updateTweet(tweet, this.post.id).subscribe((response) => {
      console.log(response.success)
      if (response.success) {
        this.editingTweet = false;
        this.editingTweetId = -1;
      }
    });
  }
  cancelEditingTweet() {
    this.editingTweet = false;
    this.editingTweetId = -1;
  }
  deleteTweet() {
    this.postService.deleteTweet(this.editingTweetId, this.post.id).subscribe((response) => {
      console.log(response.success);
      if (response.success) {
        const tweetIndex = this.tweets.findIndex(tweet => tweet.id === this.editingTweetId);
        if (tweetIndex > -1) {
          this.tweets.splice(tweetIndex, 1);
        }
        this.editingTweet = false;
        this.editingTweetId = -1;
      }
    });
  }


}
