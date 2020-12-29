import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  public name = "";
  public email = "";
  public password = "";
  public phone = "";
  public message = "";

  constructor(private service: DataService, private router: Router, ) { }

  ngOnInit() {
  }

  callForSignUpValidation() {

    let signUpCredentialData = {
      userName: this.name,
      userEmail: this.email,
      userPassword: this.password,
      userPhone: this.phone
    }

    let responseObj = null;
    let navigationURL = null;

    console.log(signUpCredentialData);

    let observableResult = this.service
      .sendUserSignUpDetailsToValidate(signUpCredentialData);

    observableResult.subscribe((result) => {
      console.log(result);
      responseObj = result;
      navigationURL = responseObj.userSigninURL;

      this.navigateToAddressFillUp();

    }, (error) => {
      console.log(error);
    });
  }

  navigateToAddressFillUp() {
    this.router.navigate(['./customer/menu']);
  }

}
