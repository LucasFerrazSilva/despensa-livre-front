import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl + 'users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  
  public list(): Observable<User[]> {
    return this.http.get<User[]>(API_URL);
  }

  public get(id: string): Observable<User> {
    return this.http.get<User>(API_URL + id);
  }

  public save(obj: User): any {
    return this.http.post(API_URL, obj);
  }

  public remove(id: string): any {
    return this.http.delete(API_URL + id);
  }

}