import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private url="https://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient:HttpClient) { }

  getMessages(){
    return ['message1','message2','message3'];
  }

  getPosts():Observable<Post[]>{
   return this.httpClient.get<Post[]>(this.url);
  }
}
