import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../MaterialModule';

@Component({
  selector: 'app-app-menu',
  standalone: true,
  imports: [RouterOutlet , RouterLink,MaterialModule,RouterLinkActive],
  templateUrl: './app-menu.component.html',
  styleUrl: './app-menu.component.css'
})
export class AppMenuComponent implements OnInit {
  menus:string[] = ["Products","Brands" , "Types"];
  ngOnInit(): void {

  }


}
