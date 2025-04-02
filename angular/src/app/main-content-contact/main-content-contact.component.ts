import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-content-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './main-content-contact.component.html',
  styleUrl: './main-content-contact.component.css'
})
export class MainContentContactComponent {

  contactForm = new FormGroup({
    name: new FormControl,
    email: new FormControl,
    phone: new FormControl,
    message: new FormControl
  })

}
