import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ToolbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) { }

  onClick() {
    this.router.navigate(['/']);
  }

}
