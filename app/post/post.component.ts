import { Component, Input, inject } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  @Input() post!: Post

  route: ActivatedRoute = inject(ActivatedRoute)
  InfoService: InfoService = inject(InfoService)

  postId: number = 0
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = +params['id']; 
      this.InfoService.getPostById(this.postId).then((post: Post) => {
        this.post = post
      })
    });
  }


  constructor() {

  }



}
