import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RefundrequestService } from '../refundrequest.service';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.css']
})
export class RefundComponent implements OnInit {

  refundrequest = {
    
    paymentId: 21,
    bookId: 13,
    email: "warner112@gmail.com",
    refundAmount:333
    }

    refund(){
      const observable = this.refundrequestservice.refundService(this.refundrequest)
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

  constructor(private refundrequestservice:RefundrequestService, private router: Router) { }

  ngOnInit(): void {
  }

}
