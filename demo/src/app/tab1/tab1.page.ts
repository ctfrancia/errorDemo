import { Component } from '@angular/core';
import { Platform } from '@ionic/angular'
import { contacts } from './listOfContacts';
import { Observable } from 'rxjs';
import { ContactService } from './contact.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private plt: Platform;
  // public header: string = '';
  public contactList$: Observable<any[]>;
  public itemSize: number;

  private cs: ContactService;
  public constructor(plt: Platform, cs: ContactService) {
    this.plt = plt;
    this.cs = cs;
    // I've tried this.header = '' here but still undefined
  }
  ngOnInit(){
    this.itemSize = this.plt.is('ios') ? 44 : 56;
    this.cs.contactinit();
    this.contactList$ = this.cs.getContacts();
  }

  public trackByFn(recordIndex: number, record: any): number {
    console.log('index', recordIndex);
    console.log('record', record);
    // console.log('header', this.header); //<--cannot read property 'header' of undefined
    let i = '';
    const char = record.lastNames[0].toUpperCase().replace('À', 'A');
    if (char !== i) {
      i = record.lastNames[0];
      // this.header = i;
    }
    return null;
    // return recordIndex;
  }


}
