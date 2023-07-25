import { Component } from '@angular/core';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent {
  constructor(public postService: PostService) {}

  getActivePost() {
    const postActive: Post[] = this.postService.getPost();
  }
}
