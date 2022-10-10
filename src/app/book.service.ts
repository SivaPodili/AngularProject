import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = "http://localhost:9090/api/v1/digitalbooks/author";
@Injectable({
  providedIn: 'root'
})
export class BookService {
  readbookbyemailandbookidService(book: { email: string; bookId: string; }) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials || '{}')['accessToken'];

    return this.http.get(URL+'/readers/'+book.email+'/books/'+book.bookId,  {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  
  readbookbyEmailidandPaymentidService(book: { email: string; paymentid: string; }) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials || '{}')['accessToken'];

    return this.http.get(URL+'/readers/'+book.email+'/books/paymentId/'+book.paymentid,  {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  
  searchBookService(book: { category: string; author: string; price: number; publisher: string; }) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials || '{}')['accessToken'];

    return this.http.get(URL+'/searchBooks'+'?category='+book.category+'&author='+book.author+'&price='+book.price+'&publisher='+book.publisher,  {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  updateBookService(book: { author: string; title: string; category: string; image: string; price: number; publisher: string; active: string; content: string; publisheddate: string; }) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials || '{}')['accessToken'];

    return this.http.put(URL + '/books/1', book, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }


  createBookService(book: { author: string; title: string; category: string; image: string; price: number; publisher: string; active: string; content: string; publisheddate: string; }) 
  {

    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials || '{}')['accessToken'];

    return this.http.post(URL + '/createbook', book, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  constructor(private http: HttpClient) { }
}
