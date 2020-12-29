import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'http://13.127.159.38:8080/tooyummypizzas/';

  constructor(private httpHelper: HttpClient) { }

  // =========signIn========
  sendUserSignInDetailsToValidate(signInCredentialDataObj) {
    return this.httpHelper.post(this.baseUrl + 'user/signin', signInCredentialDataObj);
  }

  // =========signUp========
  sendUserSignUpDetailsToValidate(signUpCredentialDataObj) {
    return this.httpHelper.post(this.baseUrl + 'user/signup', signUpCredentialDataObj);
  }

  // =========load default menu===========
  loadDefaultMenuToCustomerMenuHome(dailyUserMenuType) {
    return this.httpHelper.get(this.baseUrl + 'customer/menu/' + dailyUserMenuType);
  }

  // =========send selected menu to cart===========
  sendCartDataToServerSide(cartData, userId) {
    console.log(cartData);
    return this.httpHelper.post(this.baseUrl + 'customer/cart/' + userId, cartData);
  }

  // =========send selected menu to cartItems===========
  sendCartItemsDataToServerSide(cartItemsData, getCartIdFromRequest1) {
    return this.httpHelper.post(
      this.baseUrl + 'customer/cartitems/' + getCartIdFromRequest1, cartItemsData);
  }

// =========================OWNER SIDE=================================================
  // =============add new owner=============================
  addNewOwnerService(signUpCredentialDataObj) {
    return this.httpHelper.post(this.baseUrl + 'owner/addnewowner', signUpCredentialDataObj);
  }

  // =============add new menu=============================
  addNewMenuService(menuObj, categoryId) {
    return this.httpHelper.post(this.baseUrl + 'owner/addnewmenu/' + categoryId, menuObj);
  }

  // =============get All Users List=============================
  getAllUsers() {
    return this.httpHelper.get(this.baseUrl + 'owner/getAllUsers');
  }

  // =============get All Orders List=============================
    getAllOrdersList() {
      return this.httpHelper.get(this.baseUrl + 'owner/orders');

    }

  // ==============taken from cart table==================
  getAllOrders() {
    return this.httpHelper.get(this.baseUrl + 'owner/getOrders');
  }

  getAllMenu() {
    return this.httpHelper.get(this.baseUrl + 'owner/getAllMenu');
  }

  deleteSelectedMenu(menuId) {
    return this.httpHelper.delete(this.baseUrl + 'owner/deleteMenu/' + menuId);
  }

  getBIDataService() {
    return this.httpHelper.get(this.baseUrl + 'owner/getAllBIData');
  }
// ==============update user profile==================
  sendUserUpdatedDetailsToServerSide(userId, updatedCredentialData ) {
    return this.httpHelper.put(this.baseUrl + 'customer/update-profile/' + userId, updatedCredentialData);

  }
// =============  delivery boy==========================


  saveAddress(addressdata) {
    return this.httpHelper.post(this.baseUrl + 'customer/addAddress/', addressdata);
  }


}
