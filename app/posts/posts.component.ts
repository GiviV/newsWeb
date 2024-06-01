import { Component, inject, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostComponent } from '../post/post.component';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from '../services/info.service';
import { PostViewComponent } from '../post-view/post-view.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostComponent, NgFor, PostViewComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  route: ActivatedRoute = inject(ActivatedRoute);
  filterPosts: Post[] = [];
  postList: Post[] = [];
  newsService: InfoService = inject(InfoService);
  category: string = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.loadPosts();
    });
  }

  loadPosts(): void {
    this.newsService.getPosts().subscribe(
      data => {
        this.postList = data;
        this.filterPostsByCategory();
      },
      error => console.error(error),
      () => console.log('data completely arrived')
    );
  }

  filterPostsByCategory(): void {
    this.filterPosts = this.postList.filter(post => post.category === this.category);
    console.log(this.filterPosts);
  }

}
