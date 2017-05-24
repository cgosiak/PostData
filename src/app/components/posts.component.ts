import { Component } from '@angular/core';
import { PostData } from '../classes/postData';
import { PostService } from '../services/posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: '../../templates/posts.html'
})
export class PostsComponent {
  public posts: PostData[] = [];

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    
    this.route.params.subscribe(params => {
      this.postService.subscribe(params['room']);
    });

    this.postService.posts.subscribe(posts => {
      this.posts = posts;
    });

  }
}
