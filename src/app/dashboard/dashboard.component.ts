import { Component, OnInit } from '@angular/core';
import { DataEmitInterface } from '../file-input/model/data-emit-interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  fileData!: DataEmitInterface;
  displayData!: any;
  constructor() { }

  ngOnInit(): void {
  }
  loadDataForDisplay(fileD: any): void {
    console.log(fileD);
    const { tabs, data } = fileD;
    // update data for display
    this.displayData = data[tabs[0]];
    this.fileData = fileD;
  }
  get dataForDisplay() {
    return this.displayData;
  }
  loadSelectedSheet(tab: any): void {
    this.displayData = this.fileData?.data[tab];
  }

}
