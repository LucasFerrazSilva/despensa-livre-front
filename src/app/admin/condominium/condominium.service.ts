import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Condominium } from './condominium';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl + 'condominiums/';

@Injectable({
  providedIn: 'root'
})
export class CondominiumService {

  constructor(private http: HttpClient) {}


  public list(): Observable<Condominium[]> {
    return this.http.get<Condominium[]>(API_URL);
  }

  public save(obj: Condominium): Observable<Object> {
    return this.http.post(API_URL, obj);
  }

  public get(id: string): Observable<Condominium> {
    return this.http.get<Condominium>(API_URL + id);
  }

  public remove(id: string): any {
    return this.http.delete(API_URL + id);
  }

}