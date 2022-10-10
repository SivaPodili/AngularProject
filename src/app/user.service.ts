import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  purchasedBookService(user: { email: string; }) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials || '{}')['accessToken'];

    return this.http.get(this.BASE_URL1+'/allPurchasedBooks/'+user.email, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  
  signupService(user: { username: string; email: string; password: string;}) {
    return this.http.post(this.BASE_URL1+'/signup',user)
  }
  BASE_URL1="http://localhost:9090/api/v1/digitalbooks/author"
  // BASE_URL="http://localhost:5000/Users"
 signinUser(user:{username:String,password:String}) {
return this.http.post(this.BASE_URL1+'/signin',user)
 }


  constructor(private http: HttpClient) { }
}
