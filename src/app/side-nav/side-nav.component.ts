import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
// import { ParentComponentApi } from '../app.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  selectedYear = '';
  selectedLaunch = '';
  selectedLand = '';
  filterHeading: any[] = ['Launch Year', 'Successful Launch', 'Successful Landing'];
  filterOptionsYear: any[] = ['2006', '2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021'];
  filterOptionsBoolean: any[] = ['True', 'False'];
  filterOptionsBooleanLand: any[] = ['True', 'False'];
  yearId: any;
  launchId: any;
  landId: any;
  @Output("childEvent") childEvent: EventEmitter<any> = new EventEmitter();
   
  constructor() { }

  ngOnInit(): void {
  }

 yearButtonClick(event, yearBtn){
  this.selectedYear = event.target.value;
    if(!this.yearId){
      this.yearId = yearBtn;
      yearBtn.className += " selected";
    }
    else if(this.yearId.id != yearBtn.id){
      let yearId: any = this.yearId;
      yearId.className = 'btn btn-success btnProp btn-sm';
      this.yearId = yearBtn;
      yearBtn.className += " selected";
    }
    else{
      if(yearBtn.className.indexOf('selected') != -1){
        this.selectedYear = '';
        yearBtn.className = 'btn btn-success btnProp btn-sm';
      }
      else 
      yearBtn.className += " selected";
    }
    this.childEvent.emit({
      yearValue : this.selectedYear,
      landValue : this.selectedLand,
      launchValue: this.selectedLaunch
    });
  }

  launchButtonClick(event, launchBtn){
    this.selectedLaunch = event.target.value;
    if(!this.launchId){
      this.launchId = launchBtn;
      launchBtn.className += " selected";
    }
    else if(this.launchId.id != launchBtn.id){
      let launchId: any = this.launchId;
      launchId.className = 'btn btn-success btnProp btn-sm';
      this.launchId = launchBtn;
      launchBtn.className += " selected";
    }
    else{
      if(launchBtn.className.indexOf('selected') != -1){
        this.selectedLaunch = '';
        launchBtn.className = 'btn btn-success btnProp btn-sm';
      }
      else 
      launchBtn.className += " selected";
    }
    this.childEvent.emit({
      yearValue : this.selectedYear,
      landValue : this.selectedLand,
      launchValue: this.selectedLaunch
    });
  }

  landButtonClick(event, landBtn){
    this.selectedLand = event.target.value;
    if(!this.landId){
      this.landId = landBtn;
      landBtn.className += " selected";
    }
    else if(this.landId.id != landBtn.id){
      let landId: any = this.landId;
      landId.className = 'btn btn-success btnProp btn-sm';
      this.landId = landBtn;
      landBtn.className += " selected";
    }
    else {
      if(landBtn.className.indexOf('selected') != -1){
        this.selectedLand = '';
        landBtn.className = 'btn btn-success btnProp btn-sm';
      }
      else 
      landBtn.className += " selected";
    }
    this.childEvent.emit({
      yearValue : this.selectedYear,
      landValue : this.selectedLand,
      launchValue: this.selectedLaunch
    });
  }
}
