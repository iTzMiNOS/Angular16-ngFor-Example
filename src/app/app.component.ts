import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngFor';
  num: number = 6;
  postArray: Array<any> = [
    {id:1,postTitle:'Post 1'},
    {id:2,postTitle:'Post 2'},
    {id:3,postTitle:'Post 3'},
    {id:4,postTitle:'Post 4'},
    {id:5,postTitle:'Post 5'}
  ];
  objArray: Array<any> = [
    {id:1,postTitle:'Post 1'},
    {id:2,postTitle:'Post 2'},
    {id:3,postTitle:'Post 3'},
    {id:4,postTitle:'Post 4'},
    {id:5,postTitle:'Post 5'}
  ];
  addNew(){
    this.objArray.push({id:this.num,postTitle:'Post ' + this.num})
    this.num++;
  }
  onDelete(index:number){
    this.objArray.splice(index,1);
  }
}
