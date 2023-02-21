import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
isActive=false;

activeTab:string='Home';
email:any="myexample@gmail.com";
constructor(){
  
}
onKeyUp(){
  console.log(this.email);
}
onTabclick(tab:any){
this.activeTab=tab;
}
}
