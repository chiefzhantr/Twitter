import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";

import {NewsComponent} from "./news/news.component";
import {SettingsComponent} from "./settings/settings.component";
import {PostDetailComponent} from "./post-detail/post-detail.component";
import {EditPostComponent} from "./edit-post/edit-post.component";
import {LoginSignUpComponent} from "./login-sign-up/login-sign-up.component";
import {AddPostComponent} from "./add-post/add-post.component";
const routes: Routes = [
  {path: 'profile', component: ProfileComponent },
  {path: 'news', component: NewsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '', component: LoginSignUpComponent},
  {path: 'news/:postId', component: PostDetailComponent},
  {path: 'editPost/:postId', component: EditPostComponent},
  {path: 'addPost', component: AddPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
