import { Component} from '@angular/core';
import { ModelCity } from "src/models/ModelCity";
import { citys as data } from 'src/data/city'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  citys: ModelCity[] = data;  
}
