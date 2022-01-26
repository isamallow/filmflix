import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // ViewChild é uma forma do meu typescript pegar algo do meu template
  @ViewChild('login') loginForm!: NgForm;

  onSubmit(){
    console.log(this.loginForm.value);
    // TO DO: integrar como AuthService
  }

  constructor() { }

  ngOnInit(): void {
  }



}
