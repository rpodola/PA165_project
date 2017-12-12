import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  text: string;
  @Input() labelText: string;
  @Output() submitText = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitText.emit(this.text);
  }

}
