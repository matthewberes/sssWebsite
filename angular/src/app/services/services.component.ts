import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  constructor(private router: Router) { }

  onClick(service: string) {
    this.router.navigate([service]);
    window.scrollTo(0, 0);
  }

}
