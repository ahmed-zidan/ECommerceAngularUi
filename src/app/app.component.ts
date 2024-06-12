import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppMenuComponent } from './component/app-menu/app-menu.component';
import { SectionHeaderComponent } from './component/section-header/section-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppMenuComponent,SectionHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ECommerceAngularUi';
}
