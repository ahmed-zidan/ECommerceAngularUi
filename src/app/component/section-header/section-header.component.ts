import { Component, effect } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';



@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [RouterModule, BreadcrumbComponent, BreadcrumbItemDirective],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.css'
})
export class SectionHeaderComponent {
  constructor(private activeRoute : ActivatedRoute){
  }

}
