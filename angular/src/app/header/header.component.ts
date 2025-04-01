import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-header',
  imports: [ToolbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
