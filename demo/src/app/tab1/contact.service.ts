import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { contacts } from './listOfContacts';

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  private listOfContactsArray: any[] = new Array<any>();
  private bsListOfContacts$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.listOfContactsArray);

  public getContacts(): Observable<any[]>{
    return this.bsListOfContacts$.asObservable()
  }

  public contactinit(): void {
    this.listOfContactsArray = contacts;
    this.bsListOfContacts$.next(this.listOfContactsArray);
  }
}