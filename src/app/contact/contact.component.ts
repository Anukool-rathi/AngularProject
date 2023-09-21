import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  user_name: string = '';
  constructor() {}
  ngOnInit(): void {}

  valueChange(value: any) {
    console.log(value);
    this.user_name = value;
  }

  handleSubmit() {
    alert('form submitted success!');
  }
}
