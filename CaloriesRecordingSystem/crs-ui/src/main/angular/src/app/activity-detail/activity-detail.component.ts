import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  isUserAdmin: boolean;

  constructor(
    private authService: AuthenticationService,
  ) {}

  ngOnInit(): void {
    this.isUserAdmin = this.authService.isUserAdmin();
  }

}
