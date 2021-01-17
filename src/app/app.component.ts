import { Component, ViewChild } from '@angular/core';
import { RestApiService } from "././shared/rest-api.service";
import { SideNavComponent } from './side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xtang';
  apiData : any;
  count: any = 0;
  scrolldata = [];
  paramValues = {
    yearValue : '',
    landValue : '',
    launchValue: ''
  }

  // @ViewChild(SideNavComponent, { static: false }) sideNavComponent: SideNavComponent;

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.getLaunches(this.paramValues);
   }

  getLaunches(paramValues) {
      this.restApi.getLaunches(paramValues).subscribe((data: {}) => {
      if(data != null && data != {}){
        this.apiData = data;
        this.scrolldata = [];
        this.count = this.apiData.length;
        this.apiData.forEach((element, i) => {
          if(i<50){
            this.scrolldata.push(element);
          }
        });
      }
    })
  }

  onScroll(e) {
    if(this.scrolldata.length >= this.count) {
      console.log("No data Available");
      return;
    }
    let counter = this.scrolldata.length+50;
    for(let i = this.scrolldata.length; i < counter; i++){
      if(this.scrolldata.length < this.count)
      this.scrolldata.push(this.apiData[i]);
      else
      break;
    }
  }
}

