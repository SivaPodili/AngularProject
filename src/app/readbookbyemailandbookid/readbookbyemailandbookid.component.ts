import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-readbookbyemailandbookid',
  templateUrl: './readbookbyemailandbookid.component.html',
  styleUrls: ['./readbookbyemailandbookid.component.css']
})
export class ReadbookbyemailandbookidComponent implements OnInit {
  book = {
    
    email: "David1@gmail.com",
    bookId: "13"
    
  }

  readbookbyemailandbookid() {
    const observable = this.bookService.readbookbyemailandbookidService(this.book);
    observable.subscribe(
      (Response: any) => {
        console.log(Response);
        //this.router.navigate(['updatebook']);
      },
      function (error) {
        alert("Something went wrong Please try again")
      }
    )
  }



  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

}
