import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";

import {NewsComponent} from "./news/news.component";
import {SettingsComponent} from "./settings/settings.component";
import {PostDetailComponent} from "./post-detail/post-detail.component";
import {EditPostComponent} from "./edit-post/edit-post.component";
import {LoginSignUpComponent} from "./login-sign-up/login-sign-up.component";
const routes: Routes = [
  {path:'',component: LoginSignUpComponent},
  {path: 'profile', component: ProfileComponent },
  {path: 'news', component: NewsComponent},
  {path: 'settings', component: SettingsComponent},
  // {path: 'login-signup', component: LoginSignUpComponent},
  {path: 'news/:postId', component: PostDetailComponent},
  {path: 'editPost/:postId', component: EditPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
