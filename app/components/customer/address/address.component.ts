import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {


  homefieldone = "";
  homefieldtwo = "";
  homecity = "";
  homepincode = "";
  homestate = ""
  userObject: any;


  constructor(private service: DataService) { }

  ngOnInit() {
  }

  // tempObject ={
  //   // this.homefieldone = "";
  //   // this.homefieldtwo = "";
  //   // this.homecity = "";
  //   // this.homepincode = "";
  //   // this.homestate = "";

  // }

  callToSaveHomeAddress() {
    this.homefieldone = "";
    this.homefieldtwo = "";
    this.homecity = "";
    this.homepincode = "";
    this.homestate = ""


    let homeAddressData = {

      //  this.homefieldone;
      //  this.homefieldtwo;
      //  this.homecity;
      //  this.homepincode;
      // this.homestate;


    };

    let observableResult = this.service.saveAddress;


  }





}
