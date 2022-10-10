import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-purchasebookby-email',
  templateUrl: './purchasebookby-email.component.html',
  styleUrls: ['./purchasebookby-email.component.css']
})
export class PurchasebookbyEmailComponent implements OnInit {

  user = {
    email: "siva1@gmail.com"
  }

  purchasedbookbyemail() {
    const observable = this.userService.purchasedBookService(this.user)
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
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
