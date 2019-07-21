import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Interface} from '../interfaces/interface'; 

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private api = 'https://jsonplaceholder.typicode.com';
  constructor(private http:HttpClient) { }

  getAllTasks() {
    const path = `${this.api}/todos/`;
    return this.http.get<Interface[]>(path);
  }
}
