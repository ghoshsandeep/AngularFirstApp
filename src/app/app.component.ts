import { Component, OnInit } from '@angular/core';
import { MessagesService } from './service/messages.service';
import { errorMonitor } from 'events';
import { response } from 'express';
import { Post } from './interfaces/posts.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ServiceData: string[]=[];
  Posts: any[]=[];
 
  constructor(private messageSrc:MessagesService) {
   
    this.ServiceData = messageSrc.getMessages();
  }

  ngOnInit(){
    // this.messageSrc.getPosts().subscribe(response=>{
    //   this.Posts=response;

    // },(error)=>{
    //   console.error(error);

    // })
    this.messageSrc.getPosts().subscribe({
      next:(response:Post[])=>{this.Posts=response;},
      error:(error)=>{console.error(error);}

    })


  }

  title = 'AngularFirstApp';

  //attribute binding
  buttonText='My Button';
  IsDisabled=true;

  //style binding
  bgColor="red";
  titleColor="blue";

  //class binding
  textofcolor=false;

  inputText="This is initial input text";

  //ngclass
  classes="danger text-size";
  messages="This is initial message"

  //Attribute Directive

  //ngModel
  //ngClass
  //ngStyle

  //Structure Directive
  // If Or AND ,Loop, Switch

  isLoggedIn=true;
  Username="test"

  resul=false;
}
