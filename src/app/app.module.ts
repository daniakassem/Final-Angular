import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Import routing here
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './components/shared/pager/pager.component';
import { VacationRequestsComponent } from './vacation-request/vacation-request.component';
import { HighlightSearchPipe } from './highlight.pipe';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './home-page/home-page.component';
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule.forRoot([]), // Define your routes here
        AppComponent, // Import AppComponent here
        HeaderComponent, // Import HeaderComponent here
        HomeComponent, // Import HomeComponent here
        VacationRequestsComponent // Import VacationRequestsComponent here
      ],
      declarations: [
        PagerComponent,
        HighlightSearchPipe,      // Declare HighlightSearchPipe here
      ],
      providers: [],
      bootstrap: [], // Bootstrap AppComponent here
      exports: [HighlightSearchPipe],
})
export class AppModule { }
