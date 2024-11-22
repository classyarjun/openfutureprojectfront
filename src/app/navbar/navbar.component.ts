import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isVisible: boolean = false;
  toggleNav() {
    //todo: Toggle the visibility
    this.isVisible = !this.isVisible;  
  }
}
