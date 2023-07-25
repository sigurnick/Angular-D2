import { Injectable } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface'




@Injectable({
  providedIn: 'root'
})


//classe post
export class PostService  {
posts: Post[] = []


  constructor() { }


   getPosts (){
   return fetch("../assets/db.json")
    .then((res)=>{
      if(res) {
          return res.json()
      }else {
        throw new Error('errore')
      }
    })
    .then((data)=>{
      //dati disponibili
      this.posts = data



    })
    .catch((err)=>{
      console.error(err);

    })
  }
}
