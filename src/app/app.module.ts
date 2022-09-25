import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { SingUpModule } from '@angular/singup';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './component/forms/forms.component';
import { SignupComponent } from './signup/signup.component';
import { CreateBooksComponent } from './create-books/create-books.component';
import { HeadersComponent } from './headers/headers.component';
import { Route, RouterModule } from '@angular/router';
import { SearchbooksComponent } from './searchbooks/searchbooks.component';

const routes:Route []=[
  { path:'search', component:SearchbooksComponent},
  {path:'signin', component:FormsComponent},
  {path:'signup', component:SignupComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    SignupComponent,
    CreateBooksComponent,
    HeadersComponent,
    SearchbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
