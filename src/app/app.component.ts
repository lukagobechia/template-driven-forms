import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = '';
  Email = '';
  Password = '';
  firstName = '';
  lastName = '';
  isAgreed:boolean = false;

  @ViewChild('registrationForm') form: NgForm;

  Genders = [
    { gender: "Male", display: "Male" },
    { gender: "Femalee", display: "Female" },
    { gender: "other", display: "Prefer not to say" }
  ];

  defaultGender = "Male";

  onFormSubmit() {
    console.log(this.form);
    this.userName = this.form.value.username;
    this.firstName = this.form.value.firstname;
    this.lastName = this.form.value.lastname;
    this.isAgreed = this.form.value.agreement;
    // this.form.reset();

    this.form.form.patchValue({
     gender: 'Male'
    })
  }

fn = '';
ln = '';
  generateUsername() {
    this.fn = this.form.value.firstname;
    this.ln = this.form.value.lastname;

    let genUsername = '';

    if (this.fn.length >= 3)
      genUsername += this.fn.slice(0, 3);
    else genUsername += this.fn;


    if (this.ln.length >= 3)
      genUsername += this.ln.slice(0, 3);
    else genUsername += this.ln;

    console.log(genUsername);

    // this.form.setValue(
    //   {
    //     firstname: this.form.value.firstname,
    //     lastname: this.form.value.lastname,
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
