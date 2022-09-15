import { Component, Input } from '@angular/core';
import { ModelCity } from "src/models/ModelCity";
import { citys as data } from 'src/data/city'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  citys: ModelCity[] = data;
  list = true;
  actions = false;
  form = false;
  newCity: ModelCity = {   
    id: this.citys.length + 1,
    image: '',
    name: '',
    description: '',
    favorite: false,
  };

  closeForm(form: boolean) {
    this.form = false;
    return form;
  }

  nameAdd: string;
  descriptionAdd: string;
  imageAdd: string;

  addName(name: string) {
    this.nameAdd = name;
  }

  addDescription(description: string) {
   this.descriptionAdd = description;
  }

  addImage(image: string) {
   this.imageAdd = image;
  }

  addCity(name: string, description: string, image: string) {
    this.citys.push({
      id: this.citys.length + 1,
      image: this.imageAdd,
      name: this.nameAdd,
      description: this.descriptionAdd,
      favorite: false,
    })
    console.log(this.citys)
  }
}
