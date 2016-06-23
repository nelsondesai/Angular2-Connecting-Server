/// <reference path="../typings/tsd.d.ts" />
import {Component} from 'angular2/core';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `                
    `,
    providers:[PostService,  HTTP_PROVIDERS]
})
export class AppComponent implements OnInit{
   constructor(private _postService: PostService)
   {
       this._postService.createPost({
           userId:1,
           title:'a',
           body:'b'
       }).subscribe( post => console.log(post));;
   }
   ngOnInit()
   {
        this._postService.getPosts()
        .subscribe( post => console.log(post[0].title));
   }
}