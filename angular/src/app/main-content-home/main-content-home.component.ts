import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-content-home',
  imports: [],
  templateUrl: './main-content-home.component.html',
  styleUrl: './main-content-home.component.css'
})
export class MainContentHomeComponent {
  constructor(private router: Router) { }

  onClick() {    
    this.router.navigate(['/maintenance-request']);
  }

}
