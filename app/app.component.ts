/// <reference path="../typings/tsd.d.ts" />
import {Component} from 'angular2/core';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {GitHubComponent} from'./github.component';
@Component({
    selector: 'my-app',
    template: `<div *ngIf="isLoading">
                    <i class="fa fa-spinner fa-spin fa-3x"></i>
               </div>
               <github-profile></github-profile>                
    `,
    providers:[PostService,  HTTP_PROVIDERS],
    directives:[GitHubComponent]
})
export class AppComponent implements OnInit{
   isLoading = true
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
        .subscribe(
             post => {
                 this.isLoading = false;
                 console.log(post[0].title)
                }
            );
   }
}