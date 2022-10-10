import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { SingUpModule } from '@angular/singup';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './component/forms/forms.component';
import { SignupComponent } from './signup/signup.component';
import { HeadersComponent } from './headers/headers.component';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookformComponent } from './bookform/bookform.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { BuybookComponent } from './buybook/buybook.component';
import { PurchasebookbyEmailComponent } from './purchasebookby-email/purchasebookby-email.component';
import { ReadbookbyemailandpaymentidComponent } from './readbookbyemailandpaymentid/readbookbyemailandpaymentid.component';
import { ReadbookbyemailandbookidComponent } from './readbookbyemailandbookid/readbookbyemailandbookid.component';
import { RefundComponent } from './refund/refund.component';


const routes:Route []=[
  { path:'home', component:HomeComponent},
  {path:'signin', component:FormsComponent},
  {path:'signup', component:SignupComponent},
  {path:'createbook', component:BookformComponent},
  { path:'updatebook', component:UpdatebookComponent},
  { path:'searchbook', component:SearchbookComponent},
  { path:'buybook', component:BuybookComponent},
  { path:'purchasedbookbyemail', component:PurchasebookbyEmailComponent},
  { path:'readbookbyemailandpaymentid', component:ReadbookbyemailandpaymentidComponent},
  { path:'readbookbyemailandbookid', component:ReadbookbyemailandbookidComponent},
  { path:'refundrequest', component:RefundComponent},
 
];
@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    SignupComponent,
    HeadersComponent,
    HomeComponent,
    BookformComponent,
    UpdatebookComponent,
    SearchbookComponent,
    BuybookComponent,
    PurchasebookbyEmailComponent,
    ReadbookbyemailandpaymentidComponent,
    ReadbookbyemailandbookidComponent,
    RefundComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
     ReactiveFormsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
