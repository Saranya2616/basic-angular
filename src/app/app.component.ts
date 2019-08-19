import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people=[
    {
      name:'Saranya',
      age:'21',
      city:'chennai',
      edit:false
    },
    {
      name:'BD',
      age:'23',
      city:'chennai',
      edit:false
    },
    {
      name:'Goutham',
      age:'21',
      city:'chennai',
      edit:false
    }
  ];
  constructor(private router: Router) { }
  changeEdit(index: number) {
    console.log('calling');
    this.people[index].edit = !this.people[index].edit;
    // this.router.navigate(['']);
  }
  deleteData(index){
    console.log('deleting');
    this.people.splice(index,1);
  }
  
  ngOnInit() {
  }

}


    
  

