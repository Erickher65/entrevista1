import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { UserPostComponent } from './components/user-post/user-post.component';


const routes: Routes = [
  {path: '' ,pathMatch:'full',redirectTo:'posts'},
  {path:'posts', component:PostsComponent},
  {path:'posts/:id', component:UserPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
