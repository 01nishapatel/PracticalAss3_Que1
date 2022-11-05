import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // user: User = {
  //   name: "",
  //   surname: "",
  //   email:""
  // };
  data2:any;
  constructor() { }

  ngOnInit(): void {
  }
  // submit() {
  //   alert(`Submited with: ${this.user.name} ${this.user.surname} ${this.user.email} `);
  // }
  onSubmit(data:any){
    this.data2=data.value;
  }
}
// export interface User {
//   name: string;
//   surname: string;
//   email:string;
// }
