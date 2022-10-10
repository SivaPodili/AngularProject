import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = "http://localhost:9090/api/v1/digitalbooks/author";
@Injectable({
  providedIn: 'root'
})
export class RefundrequestService {
  refundService(refundrequest: { paymentId: number; bookId: number; email: string; refundAmount: number; }) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials || '{}')['accessToken'];

    return this.http.put(URL + '/refund', refundrequest, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  constructor(private http: HttpClient) { }
}
