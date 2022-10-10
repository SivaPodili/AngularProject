import { Component, OnInit } from '@angular/core';
import { BookrequestService } from '../bookrequest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buybook',
  templateUrl: './buybook.component.html',
  styleUrls: ['./buybook.component.css']
})
export class BuybookComponent implements OnInit {
  bookrequest = {
    
    username: "siva1",
    email: "siva1@gmail.com",
    bookid: "13"
    }

    buybook(){
      const observable = this.bookrequestservice.buyBookService(this.bookrequest)
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
    

  constructor(private bookrequestservice:BookrequestService, private router: Router) { }

  ngOnInit(): void {
  }

}
