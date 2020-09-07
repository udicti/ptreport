import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-page',
  template: `
    <div style="display: flex;min-height: 100vh; flex-direction: column; justify-content: center; align-items: center">
      <h1>REGISTER</h1>
      <mat-card>
        <form [formGroup]="registerForm" (ngSubmit)="register()" style="display: flex; min-width: 400px; flex-direction: column;">
          <mat-form-field style="width: 100%" appearance="outline">
            <mat-label>Username</mat-label>
            <input formControlName="username" matInput type="text">
            <mat-error>Field required</mat-error>
          </mat-form-field>
          <mat-form-field style="width: 100%" appearance="outline">
            <mat-label>Password</mat-label>
            <input formControlName="password" matInput type="password">
            <mat-error>Field required</mat-error>
          </mat-form-field>
          <button color="primary" mat-flat-button>
            CONTINUE
          </button>
          <button routerLink="/user/login" mat-button color="primary">
            GO TO LOGIN
          </button>
        </form>
      </mat-card>
    </div>
  `
})

export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly snack: MatSnackBar) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.nullValidator, Validators.required]],
      password: ['', [Validators.nullValidator, Validators.required]],
    });
  }

  register(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      this.snack.open('Please fill all required', 'Ok', {
        duration: 2000
      });
    }
  }

}
