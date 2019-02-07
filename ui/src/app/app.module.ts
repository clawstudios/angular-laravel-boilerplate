// Dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { AppRoutingModule } from './app-routing.module';

// Pages
import { AppComponent } from './app.component';
import { ExampleComponent } from './pages/example/example.component';

// Components

// Services
import { ExampleService } from './services/example/example.service';

// Guards

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ExampleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
