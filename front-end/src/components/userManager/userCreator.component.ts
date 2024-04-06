import { Component, Input, SimpleChanges } from '@angular/core';
import { ButtonComponent } from '../quizButton/button.component';
import { ZoomSliderComponent } from '../zoomSlider/zoomSlider.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { GenericButtonComponent } from '../genericButton/genericButton.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-userCreator',
  standalone: true,
  imports: [
    ButtonComponent,
    ZoomSliderComponent, NavbarComponent,
    GenericButtonComponent,
    ReactiveFormsModule

  ],
  templateUrl: './userCreator.component.html',
  styleUrl: './userCreator.component.scss'
})
export class UserCreatorComponent {
  public userCreatorForm: FormGroup;


  constructor(public formBuilder: FormBuilder) {

    this.userCreatorForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      alzheimerState: [3, Validators.required],
      userBirth: ['', Validators.required],
      hobbies: ['', Validators.required],
      baseZoom: [100, Validators.required],
      choiceSimon: ['', Validators.required],
      choiceRead: ['', Validators.required]
    });
  }


  isFormValid(): boolean {
    return this.userCreatorForm.valid;
  }


  addUser(): void {
    console.log(this.userCreatorForm.getRawValue());
  }


}

