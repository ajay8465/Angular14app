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
// courses:any=[{id:1,name:'Udemy'},
// {id:2,name:'edureka'},
// {id:3,name:'spmplielearn'}];
// onAdd(){
//   this.courses.push({id:4,name:'spmplielearn'});
  
// }
// onChange(){
  
//   this.courses.name='UPDATED';
courses:any;
onLoading(){
  this.courses=[{id:1,name:'Udemy'},
  {id:2,name:'edureka'},
  {id:3,name:'spmplielearn'}];
}
trackCourse(index:any,courses:any){
return courses ? courses.id :undefined;
}

}
