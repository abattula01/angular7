import { Component, OnInit, Input, Output} from '@angular/core';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

  @Input('parentData') public name:any;

  @Output() public childEvent = new EventEmitter();

  fireEvent()
  {
    this.childEvent.emit("data from child");
  }


  title = 'Angular 7 Project!';
  // declared array of months.
  months = ["January", "Feburary", "March", "April", "May", 
           "June", "July", "August", "September",
           "October", "November", "December"];

  isavailable = true;
  todaydate = new Date();
   jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};

  myClickFunction(event:any) { 
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    console.log(event);
 }

 changemonths(event:any) {
  alert("Changed month from the Dropdown");
}

  constructor(private http: Http) { }
  httpdata : any;

  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/users")
    .pipe(map((response) => response.json()))
    .subscribe((data) => this.displaydata(data));     
 }
 displaydata(data:any) {this.httpdata = data;}
}
