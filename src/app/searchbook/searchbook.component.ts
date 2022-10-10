import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent implements OnInit {
  uiResponse:any;
  showTable:boolean=false;
  book = {
    
    category: "General",
    author: "mani",
    price: 555,
    publisher: "podili",
    
  }

  
  searchbook(){
    const observable = this.bookService.searchBookService(this.book)
    observable.subscribe(
      (Response: any) => {
        console.log(Response);
        this.uiResponse=Response;
        this.showTable=true;
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
