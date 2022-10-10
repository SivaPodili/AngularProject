import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-readbookbyemailandpaymentid',
  templateUrl: './readbookbyemailandpaymentid.component.html',
  styleUrls: ['./readbookbyemailandpaymentid.component.css']
})
export class ReadbookbyemailandpaymentidComponent implements OnInit {
  book = {
    
    email: "David1@gmail.com",
    paymentid: "24"
    
  }

  readbookbyemailidandpaymentid() {
    const observable = this.bookService.readbookbyEmailidandPaymentidService(this.book)
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
