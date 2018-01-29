import { Component,  OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: "",
    password: ""
  };
  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    this.verify();
  }
  verify(): void {
    if(this.user.email == "mv.poorna@gmail.com" && this.user.password == "123456"){
      this.router.navigate(['dashboard']);
    }
    else{
      console.log("Fail");
    }
  }
}
