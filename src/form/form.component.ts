import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() outFormAction = new EventEmitter<boolean>();

  changeFormAction() {
    this.outFormAction.emit()
  }

  @Output() outFormName = new EventEmitter<string>();

  submitName(nameInput: HTMLInputElement) {
    this.outFormName.emit(nameInput.value);
  }

  @Output() outFormDescription = new EventEmitter<string>();

  submitDescription(descriptionInput: HTMLInputElement) {
    this.outFormDescription.emit(descriptionInput.value);
  }

  @Output() outFormImage = new EventEmitter<string>();

  submitImage(imageInput: HTMLInputElement) {
    this.outFormImage.emit(imageInput.value);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}