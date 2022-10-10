import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  book = {
    author: "siva",
    title: "Sun",
    category: "general",
    image: "sun.jpg",
    price: 125,
    publisher: "podili",
    active: "yes",
    content: "very warm",
    publisheddate: "30 sept 2022"

  }


  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }
  update() {
    const observable = this.bookService.updateBookService(this.book)
    observable.subscribe(
      (Response: any) => {
        console.log(Response);
        alert("Book Updated Successfully");
        //this.router.navigate(['home']);
      },
      function (error) {
        alert("Something went wrong Please try again")
      }
    )
  }

}
