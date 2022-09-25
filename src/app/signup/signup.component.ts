import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user={
    username:"jaiv",
    email:"jaiv@gmail.com",
    password:"annc123"
 }

  constructor(private userService:UserService) { }

  ngOnInit(): void {

  }
  signup(){
    const observable=this.userService.signupService(this.user)
    observable.subscribe(
      (Response:any)=>{
        console.log(Response);
      },
      function(error){
        alert("Something went wrong Please try again")
      }
      )

  }

}
