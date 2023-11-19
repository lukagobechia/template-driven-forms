import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username = '';
  email = '';
  password = '';
  
  @ViewChild('registrationForm') form: NgForm;
  onFormSubmit(){
    console.log(this.form);
    console.log(this.form.controls['username'].value);
    console.log(this.form.value.email);
    console.log(this.form.value.password);
  }

  Genders = [
    {gender: "Male", display: "Male"},
    {gender: "Femalee", display: "Female"},
    {gender: "other", display: "Prefer not to say"}
  ];
}
