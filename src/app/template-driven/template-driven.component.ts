import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  // moduleId: module.id,
  selector: 'template-driven',
  templateUrl: 'template-driven.component.html',
  styles: [`
    .ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class TemplateDrivenComponent {
  user = {
    username: 'Gregory',
    email: 'greg.cockerham@gmail.com',
    password: '43987984',
    gender: 'male'
  }

  genders = [
    'male',
    'female'
  ];

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
