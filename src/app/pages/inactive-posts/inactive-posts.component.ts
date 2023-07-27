import { Component } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent {
  inactivePostsData: Post[] = [];
  allPosts: Post[] = [];

  constructor(public postService: PostService) {}

  //prendo tutti i post dal service
  ngOnInit() {
    this.postService.getAllPosts().then((data) => {
      this.allPosts = data;
      this.getInactivePosts();
    });
  }

  getInactivePosts() {
    this.inactivePostsData = this.allPosts.filter(
      (post) => post.active === false
    );
  }

  changeStatus(id: number) {
    this.inactivePostsData[id - 1].active =
      this.inactivePostsData[id - 1].active === true ? false : true;
    fetch('http://localhost:3000/posts/' + id, {
      method: 'PUT',
      body: JSON.stringify(this.inactivePostsData[id - 1]),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
}
