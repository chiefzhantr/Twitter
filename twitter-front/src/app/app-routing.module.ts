import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsComponent} from "./news/news.component";
import {SettingsComponent} from "./settings/settings.component";
import {PostDetailComponent} from "./post-detail/post-detail.component";

const routes: Routes = [
  {path: 'news', component: NewsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'news/:postId', component: PostDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
