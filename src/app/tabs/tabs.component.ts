import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  isactive:string="Bank details";
constructor(){

}

tabsLinks(tab:any){
this.isactive=tab;
}
}
