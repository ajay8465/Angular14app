import { Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  namespace:boolean=true;
  courses:any=[1,2,3];
constructor(){

}
}
