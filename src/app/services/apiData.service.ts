import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posted } from '../models/post.model';
import { User } from '../models/user.model';

@Injectable()
export class ApiDataService {
  apiUrl = 'http://jsonplaceholder.typicode.com/users';
  pUrl = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.apiUrl);
  }

  getPosts(npost: Posted): Observable<any> {
    return this.http.post(this.pUrl, npost);
  }
}
