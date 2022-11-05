import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disp-basic',
  templateUrl: './disp-basic.component.html',
  styleUrls: ['./disp-basic.component.css']
})
export class DispBasicComponent implements OnInit {

  a:number=10;
name:string="Nisha Patel";
  date = new Date();

  fruits=["apple","mango","banana","orange"];


  data=[
    {
      id:101,
      name:'Apple'
    },
    {
      id:102,
      name:'Mango'
    },
    {
      id:103,
      name:'Orange'
    },{
      id:104,
      name:'Banana'
    },];
  selectedItem?:String;
  OnSelect(e:any){
     this.selectedItem =e.target.value
  }
  onmulti(){
    console.log("multi Selected");
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
