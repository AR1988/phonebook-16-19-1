import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Contact} from "../model/contact";
import {Phone} from "../model/phone";
import {Address} from "../model/address";
import {Email} from "../model/email";


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts: Contact[] = [
      {id: 11, firstName: 'Falco', lastName: 'Bergener', age: 27, isFavorite: true, group: 'home'},
      {id: 12, firstName: 'Maik', lastName: 'Pupkin', age: 30, isFavorite: false, group: 'private'},
      {id: 13, firstName: 'Cristina', lastName: 'Rohder', age: 20, isFavorite: true, group: 'other'},
      {id: 14, firstName: 'Roman', lastName: 'Bergman', age: 40, isFavorite: false, group: 'private'},
      {id: 15, firstName: 'Cristopfer', lastName: 'Muller', age: 52, isFavorite: true, group: 'home'},
    ];

    const phones: Phone[] = [
      {id: 1, isFavorite: false, contactId: 11, countryCode: '007', telephoneNumber: ' 123456789', group: 'home'},
      {id: 2, isFavorite: false, contactId: 11, countryCode: '+49', telephoneNumber: ' 987654321', group: 'private'},
      {id: 3, isFavorite: false, contactId: 11, countryCode: '+7', telephoneNumber: ' 56465168665', group: 'work'},

      {id: 4, isFavorite: false, contactId: 12, countryCode: '007', telephoneNumber: ' 646166', group: 'home'},
      {id: 5, isFavorite: false, contactId: 13, countryCode: '+49', telephoneNumber: '19489546', group: 'private'},
      {id: 6, isFavorite: false, contactId: 14, countryCode: '+78', telephoneNumber: ' 6516516206', group: 'other'},
      {id: 7, isFavorite: false, contactId: 15, countryCode: '+9', telephoneNumber: ' 65814552', group: 'family'},
      {id: 8, isFavorite: false, contactId: 15, countryCode: '002', telephoneNumber: ' 558994', group: 'private'},
    ];
    return {contacts, phones};
  }

  genId(contacts: Contact[] | Phone[] | Address[] | Email[]): number {
    return contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1 : 11;
  }
}
