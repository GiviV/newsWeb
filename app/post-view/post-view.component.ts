import { Component, Input } from '@angular/core';
import { Post } from '../post';
import { RouterModule } from '@angular/router';
import { HoverPostDirective } from '../hover-post.directive';

@Component({
  selector: 'app-post-view',
  standalone: true,
  imports: [RouterModule, HoverPostDirective],
  templateUrl: './post-view.component.html',
  styleUrl: './post-view.component.css'
})
export class PostViewComponent {
  @Input() post!:Post

}
