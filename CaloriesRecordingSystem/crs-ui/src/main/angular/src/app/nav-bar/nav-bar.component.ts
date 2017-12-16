import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  collapse = true;

  @Input() title: string;

  constructor() { }

  clearLocalStorage() {
    localStorage.clear();
    window.location.reload();
  }

}
