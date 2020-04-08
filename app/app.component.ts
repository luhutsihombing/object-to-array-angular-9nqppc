import { Component } from '@angular/core';
import { Http, Response, RequestMethod, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Object to array';
  displayItems;
  data = {
         total: 2,
         countError: 2,
         errorResult: {
                          2: "Target proposal QCC must be number", 
                          3: "Target proposal SS must be number,Target proposal QCC must be number"
                     },
         countSuccess: 0
         };
  
  obj = this.data.errorResult;
  mapped = Object.keys(this.obj).map(key => ({type: key, value: this.obj[key]}));
  constructor(private http: Http) {}
}
