import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  userObject: any;

  public userId = '';
  public userName = '';
  public userEmail = '';
  public userPassword = '';
  public userPhone = '';
  public message = '';

  constructor(private service: DataService, private router: Router, ) { }

  ngOnInit() {
    this.userObject = JSON.parse(window.sessionStorage.getItem('userData'));
    console.log('in edit profile');

    console.log(this.userObject.userId);
    this.userId = this.userObject.userId;
  }

  callForUpdateUserProfile() {

    const updatedCredentialData = {
      userName: this.userName,
      userEmail: this.userEmail,
      userPassword: this.userPassword,
      userPhone: this.userPhone
    };

    let responseObj = null;
    let navigationURL = null;

    console.log(updatedCredentialData);

    const observableResult = this.service
      .sendUserUpdatedDetailsToServerSide(updatedCredentialData, this.userId);

    observableResult.subscribe((result) => {
      console.log(result);
      responseObj = result;
      navigationURL = responseObj.userUpdateProfileURL;

    }, (error) => {
      console.log(error);
    });
  }

  navigateToAddressFillUp() {
    this.router.navigate(['./customer/profile']);
  }

}
