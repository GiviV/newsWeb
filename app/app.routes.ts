import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { NgModule } from '@angular/core';
import { PostComponent } from './post/post.component';

export const routes: Routes = [


    {
        path:'',
        component:HomeComponent,
        title:'მთავარი'
    },
    {
        path:'posts/:category',
        component:PostsComponent,
        title:'პოსტები'
    },
    {
        path:'post/:id',
        component:PostComponent,
        title:'პოსტები'
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }