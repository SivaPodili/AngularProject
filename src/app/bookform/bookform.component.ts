import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';


@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit {

  book = {
    author: "Gautham",
    title: "Earth is Beautiful",
    category: "General",
    image: "earth.jpg",
    price: 0,
    publisher: "podili",
    active: "yes",
    content: "awesome",
    publisheddate: "20 Aug 2021"

  }

  constructor(private bookService: BookService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  //public angForm: FormGroup;
  create() {
    if(this.book.author==""||this.book.author.trim()==""){
alert("Please enter Author");
    }
    else if(this.book.price==null||this.book.price>=0){
      alert("Please enter valid price");
          }
    
    else{
    const observable = this.bookService.createBookService(this.book)
    observable.subscribe(
      (Response: any) => {
        console.log(Response);
        alert("Book Created Successfully");
        //this.router.navigate(['updatebook']);
      },
      function (error) {
        alert("Something went wrong Please try again")
      }
    )
    }
  }



}
