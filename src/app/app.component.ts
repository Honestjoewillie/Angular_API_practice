import { Component, OnInit } from '@angular/core';
import { Posted } from './models/post.model';
import { User } from './models/user.model';
import { ApiDataService } from './services/apiData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users: User[];
  posts: Posted[];
  objPosts: Posted;

  title: string;
  body: string;
  userId: number;

  constructor(private apiDataService: ApiDataService) {}
  onGetUsers() {
    return this.apiDataService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  onHideUsers() {
    this.users.splice(0, 10);
  }

  onPostUsers() {
    let npost = new Posted();
    npost.body = 'This is a test body.';
    npost.title = '...and this is the Test title.';
    npost.userId = 3;
    return this.apiDataService.getPosts(npost).subscribe((data) => {
      this.objPosts = data;
      console.log('hello, thanks for looking at my code.');
    });
  }

  onDeletePosts() {
    delete this.objPosts;
  }

  ngOnInit() {}
}
