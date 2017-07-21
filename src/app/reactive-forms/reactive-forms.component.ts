import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

function passwordMatcher(c: AbstractControl) {
  console.log('confirm value = ' + c.get('confirm').value);
  return c.get('password').value === c.get('confirm').value
    ? null : { 'nomatch': true };
}

function dateValidation(cd: AbstractControl) {
  console.log('pikaday value = ' + cd.get('pikadayData').value);
  //  console.log(cd.get('pikadayData').value.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/));

  return cd.get('pikadayData').value.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)
    ? null : { 'nomatch': true };
}

@Component({
  selector: 'reactive-forms-comp',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})

export class ReactiveFormsComponent {
  form: FormGroup;
  formError: { [id: string]: string };


  pikadayData = '';

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      first: '',
      last: '',
      account: this.fb.group({
        username: '',
        password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
        confirm: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])]
      }, {validator: passwordMatcher}),
      datas: this.fb.group({
        pikadayData: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(50)])]
      }, {validator: dateValidation}),
        newsletter: ''
    });
    // this.formError = {
    //   'pikadayData': 'ERROOOOO'
    // };
    this.form.patchValue({
      first: 'Nancy',
      last: 'Drew'
    });
  }

}
