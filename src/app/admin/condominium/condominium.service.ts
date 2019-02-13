import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Condominium } from './condominium';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CondominiumService {

  constructor(private http: HttpClient) {}


  public list(): Observable<Condominium[]> {
    return this.http.get<Condominium[]>(environment.apiUrl + "condominium/all");
  }

}