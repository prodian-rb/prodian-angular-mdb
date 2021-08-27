import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  loginAction() {
    console.warn(this.loginForm.value)
  }

  get usernameValidity() {
    return this.loginForm.get('username')
  }

  get passwordValidity() {
    return this.loginForm.get('password')
  }
}
