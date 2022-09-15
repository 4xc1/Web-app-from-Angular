import { Component, Input } from '@angular/core';
import { ModelCity } from 'src/models/ModelCity';


@Component ({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Input() citys: ModelCity;
  
}