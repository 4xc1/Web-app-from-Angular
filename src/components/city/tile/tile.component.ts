import { Component, Input } from '@angular/core';
import { ModelCity } from 'src/models/ModelCity';


@Component ({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})

export class TileComponent {
  @Input() citys: ModelCity;
  actions = false;
}