import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  message: any = {};

  constructor(
    private routerThang: Router
  ) { }

  ngOnInit() {
  }

  submitMessage() {
    alert('Message Sent!');

    // redirect user to home
    this.routerThang.navigate(['/']);
  }

}
