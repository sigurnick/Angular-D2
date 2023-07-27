import { Injectable } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})

//classe post
export class PostService {
  url: string = 'http://localhost:3000/posts';
  posts: Post[] = [];
  // postActive: Post[] = [];
  postInactive: Post[] = [];

  constructor() {}


  // fetchPost() {
  //   fetch(this.url)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {


  //       data.forEach((e: Post) => {
  //         this.posts.push(e);
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }


  getAllPosts(){
     return fetch(this.url).then(res => res.json())
  }

  // getActivePosts(){
  //   this.getAllPosts().then((res)=>{

  //     const postActive:Post[] = this.posts.filter(post => post.active === true)
  //     return postActive
  //   })
  // }

  // getInactivePosts(){
  //   this.fetchPost()
  //   this.postInactive = this.posts.filter(post => post.active === false)
  //   this.posts = []
  //   return this.postInactive
  // }




  //  getPosts (){
  //  return fetch(this.url)
  //   .then((res)=>{
  //     if(res) {
  //         return res.json()
  //     }else {
  //       throw new Error('errore')
  //     }
  //   })
  //   .then((data)=>{
  //     //dati disponibili
  //     this.posts = data

  //   })
  //   .catch((err)=>{
  //     console.error(err);

  //   })
  // }
}
