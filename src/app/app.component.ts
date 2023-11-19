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
  firstName = '';
  lastName = '';

  @ViewChild('registrationForm') form: NgForm;
  onFormSubmit() {
    console.log(this.form);
    console.log(this.form.controls['username'].value);
    console.log(this.form.value.email);
    console.log(this.form.value.password);
  }

  Genders = [
    { gender: "Male", display: "Male" },
    { gender: "Femalee", display: "Female" },
    { gender: "other", display: "Prefer not to say" }
  ];


  generateUsername() {
    let genUsername = '';

    if (this.firstName.length >= 3)
      genUsername += this.firstName.slice(0, 3);
    else genUsername += this.firstName;


    if (this.lastName.length >= 3)
      genUsername += this.lastName.slice(0, 3);
    else genUsername += this.lastName;

    console.log(genUsername);

    // this.form.setValue(
    //   {
    //     firstName: this.form.value.firstName,
    //     lastName: this.form.value.lastName,
    //     address: {
    //       country: this.form.value.address.country,
    //       postalCode: this.form.value.address.postalCode,
    //       street1: this.form.value.address.street1
    //     },
    //     email: this.form.value.email,
    //     gender: this.form.value.gender,
    //     password: this.form.value.password,
    //     username: genUsername
    //   }
    // );

    this.form.form.patchValue({
        username: genUsername
    });
  }


}
