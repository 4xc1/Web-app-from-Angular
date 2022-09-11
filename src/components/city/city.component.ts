import { Component, Input } from '@angular/core';
import { ModelCity } from "src/models/ModelCity";

@Component ({
  selector: 'app-city',
  templateUrl: './sity.component.html',
  styleUrls: ['./sity.component.css']
})

export class CityComponent {
  @Input() citys: ModelCity
}