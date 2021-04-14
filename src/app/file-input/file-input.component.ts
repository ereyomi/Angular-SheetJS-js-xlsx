import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as XLSX from 'xlsx';
import { DataEmitInterface } from './model/data-emit-interface';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent implements OnInit {
  @Output() dataEmitter: EventEmitter<DataEmitInterface> = new EventEmitter<DataEmitInterface>();
  constructor() { }

  ngOnInit(): void {
  }
  onFileChange(evt: any) {
    let temp: any = {}; // to get all sheet by page
    let tabs: any[];
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      tabs = wb.SheetNames;

      for (let i = 0;i < wb.SheetNames.length;i++) {
        const wsname: string = wb.SheetNames[i];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
        const sheetData = XLSX.utils.sheet_to_json(ws, { header: 1 });
        temp = {
          ...temp,
          [`${ wsname }`]: sheetData,
        };
      }
      /* save data */
      this.dataEmitter.emit({
        tabs,
        data: temp
      });
    };
    reader.readAsBinaryString(target.files[0]);
  }

}
