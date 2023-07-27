import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent implements OnInit {
  activePostsData: Post[] = [];
  allPosts: Post[] = [];

  constructor(private postService: PostService) {}

  //prende tutti i post
  ngOnInit() {
    this.postService.getAllPosts().then((data) => {
      this.allPosts = data;
      this.getActivePosts();
    });
  }

  //prendi solo i post active
  getActivePosts() {
    this.activePostsData = this.allPosts.filter((post) => post.active === true);
  }

  //cambia status
  changeStatus(id: number) {
    this.activePostsData[id - 1].active =
      this.activePostsData[id - 1].active === true ? false : true;
    fetch('http://localhost:3000/posts/' + id, {
      method: 'PUT',
      body: JSON.stringify(this.activePostsData[id - 1]),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  //rimuove card
  // remove(id:number):void{
  //   const parentEl = event.target.closest('.card')
  //   if(parentEl){
  //     parentEl.remove()
  //   }
  // }
}
