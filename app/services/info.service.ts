import { Injectable } from '@angular/core';
import { Post } from '../post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  url = 'https://6619804c125e9bb9f29a2581.mockapi.io/news'

  constructor(private http:HttpClient) { }

  // async getPosts(): Promise<Post[]> {
  //   const resposne = await fetch(this.url)
  //   return await resposne.json()
  // }

  getPosts(): Observable<any>{
    return this.http.get(this.url)
  }


  async getPostById(id: number): Promise<Post> {
    const resposne = await fetch(`${this.url}/${id}`)
    return await resposne.json()
  }

 
}
