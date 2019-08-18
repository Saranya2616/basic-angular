import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  people = [
    {
      name: 'Saranya',
      age: '21',
      city: 'Chennai',
      edit: false
    },
    {
      name: 'BD',
      age: '23',
      city: 'Chennai',
      edit: false
    },
    {
      name: 'Gokul',
      age: '25',
      city: 'Chennai',
      edit: false
    },
    {
      name:'Karthi',
      age:'23',
      city:'Kolkata',
      edit:false
    }
  ];
  constructor(private router: Router) { }
  changeEdit(index: number) {
    console.log('calling');
    this.people[index].edit = !this.people[index].edit;
    this.router.navigate(['']);
  }
  ngOnInit() {
  }

}
