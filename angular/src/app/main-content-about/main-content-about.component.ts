import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-content-about',
  imports: [],
  templateUrl: './main-content-about.component.html',
  styleUrl: './main-content-about.component.css'
})
export class MainContentAboutComponent {
  constructor(private router: Router) { }

  onClick() {
    this.router.navigate(['/contact']);
  }

}
