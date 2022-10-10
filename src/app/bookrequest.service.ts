import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = "http://localhost:9090/api/v1/digitalbooks/author";
@Injectable({
  providedIn: 'root'
})
export class BookrequestService {
  buyBookService(bookrequest: { username: string; email: string; bookid: string; }) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials || '{}')['accessToken'];

    return this.http.post(URL + '/buyBooks', bookrequest, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  

  constructor(private http: HttpClient) { }
}
