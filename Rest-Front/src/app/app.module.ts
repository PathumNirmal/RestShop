import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { AllProductComponent } from './pages/all-product/all-product.component';
import { FormsModule } from '@angular/forms';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewProductComponent,
    NewProductComponent,
    AllProductComponent,
    UpdateProductComponent,
    ErrorPageComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
