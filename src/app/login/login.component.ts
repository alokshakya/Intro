import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

import { Login } from '../shared/login';
import { SignUp } from '../shared/signup';
import { LoginResponse } from '../shared/loginResponse';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  signupForm: FormGroup;
  login: Login;
  signup: SignUp;
  errMess:string;
  submitting:boolean;
  signupsubmitting:boolean;
  preview:boolean;
  loginResponse:LoginResponse;
  
  
  
  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router) {
    this.createForm();
    this.createSignUpForm();

   }
  

  ngOnInit() {
  }

  formErrors = {
    'username': '',
    'password': ''
  };

  validationMessages = {
    'username': {
      'required':      'Username is required.',
      'minlength':     'Username must be at least 2 characters long.'
    },
    'password': {
      'required':      'Password is required.'
    }
    
  };
  createForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2)] ],
      password: ['', [Validators.required] ]
    });
    this.submitting=false;
    this.loginForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onSubmit() {
    this.login = this.loginForm.value;
    console.log(this.login);
    this.submitting=true;
    this.auth.Login(this.login.username,this.login.password)
      .subscribe(loginres => {  this.submitting=false; 
        //do extra actions on received data
        this.loginResponse=loginres;
        localStorage.setItem('user',JSON.stringify(this.loginResponse));
      
        this.router.navigateByUrl('/home');
        //after successfull login navigate to dashboard
        console.log(loginres);
       },
        errmess => {this.errMess = <any>errmess; this.submitting=false;});
    
    this.loginForm.reset({
      username: '',
      password: ''
  
    });
  }
  

  onValueChanged(data?: any) {
    if (!this.loginForm) { return; }
    const form = this.loginForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  //new reactive form for signup starts
  signupformErrors = {
    'username': '',
    
    'password': '',
    'confirmPassword': ''
  };

  signupvalidationMessages = {
    'username': {
      'required':      'Username is required.',
      'minlength':     'Username must be at least 2 characters long.',
      'maxlength':     'Username cannot be more than 25 characters long.'
    },
    
    'password': {
      'required':      'Password is required.',
      'minlength':     'Password must be at least 8 characters long.'
    },
    'confirmPassword': {
      'required':      'Confirm Password is required.'
    },
    
  };
  createSignUpForm() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
    
      password: ['', [Validators.required, Validators.minLength(8)] ],
      confirmPassword: ['', [Validators.required ]]
    });
    this.signupsubmitting=false;
    this.signupForm.valueChanges
      .subscribe(data => this.onValueChangedSignUpForm(data));

    this.onValueChangedSignUpForm(); // (re)set validation messages now
  }

  onSubmitSignUpForm() {
    this.signup = this.signupForm.value;
    console.log(this.login);
    this.signupsubmitting=true;
    this.auth.SignUp(this.signup.username,this.signup.password)
      .subscribe(loginres => {  this.signupsubmitting=false; 
        //do extra actions on received data
        this.loginResponse=loginres;
        localStorage.setItem('user',JSON.stringify(this.loginResponse));
      
        this.router.navigateByUrl('/home');
        //after successfull login navigate to dashboard
        console.log(loginres);
       },
        errmess => {this.errMess = <any>errmess; this.signupsubmitting=false;});
    
    this.signupForm.reset({
      username: '',
      email:'',
      password: '',
      confirmPassword:''
  
    });
  }
  

  onValueChangedSignUpForm(data?: any) {
    if (!this.signupForm) { return; }
    const form = this.signupForm;
    for (const field in this.signupformErrors) {
      // clear previous error message (if any)
      this.signupformErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.signupvalidationMessages[field];
        for (const key in control.errors) {
          this.signupformErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
  // new reactive form for signup ends




}
