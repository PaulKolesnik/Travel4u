import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { LogoutComponent } from './components/logout/logout.component';
import { PackagesItemComponent } from './components/packages/packages-item/packages-item.component';
import { PackagesComponent } from './components/packages/packages.component';
import { CounterInputComponent } from './components/counter-input/counter-input.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    LogoutComponent,
    PackagesItemComponent,
    PackagesComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
