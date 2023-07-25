import { Injectable } from '@angular/core';



//interfaccia Post
interface Ipost{
  id:number ,
  body:string ,
  title:string ,
  active: boolean

}

@Injectable({
  providedIn: 'root'
})


//classe post
export class PostService  {

  id:number = 0
  body:string = ''
  title:string = ''
  active: boolean = true

  constructor() { }

   getPost (){
    fetch("../assets/db.json")
    .then((res)=>{
      if(res) {
          return res.json()
      }else {
        throw new Error('errore')
      }
    })
    .then((data)=>{
      //dati disponibili
      console.log(data);
      return data



    })
    .catch((err)=>{
      console.error(err);

    })
  }
}
