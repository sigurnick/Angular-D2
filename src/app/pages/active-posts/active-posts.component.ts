import { Component } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Post } from 'src/app/interfaces/post.interface'

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent {
  posts2: Post[] = []
  postsActive: Post[] = []
  constructor(public postService: PostService) {


    this.postService.getPosts().then(_ =>{
      this.posts2 = this.postService.posts
      console.log(this.posts2);
      this.postsActive = this.posts2.filter((e)=>e.active === true)
      console.log(this.postsActive);


    })
  }


}
