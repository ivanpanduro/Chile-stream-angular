import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
@NgModule({
    declarations: [
    ],
    imports: [
      BrowserModule,
      ReactiveFormsModule,
      AppRoutingModule,
      AppComponent,
      LoginComponent,
      HomeComponent
    ],
    providers: [],
    
  })
  export class AppModule {}
  