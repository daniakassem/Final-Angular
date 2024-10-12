import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from "./home-page/home-page.component";
import { AppModule } from "./app.module";
import { FormsModule } from '@angular/forms';
import { VacationRequestsComponent } from "./vacation-request/vacation-request.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent, HomeComponent, AppModule, FormsModule, VacationRequestsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
style: any;
selectAll: any;
searchTerm!: string;
onSearch() {
throw new Error('Method not implemented.');
}
request: any;
toggleSelectAll($event: Event) {
throw new Error('Method not implemented.');
}
  title = 'Final_Angular';
}
