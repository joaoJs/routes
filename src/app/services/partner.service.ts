import { Injectable } from '@angular/core';

@Injectable()
export class PartnerService {

  partners: any[] = [
    { id: 1, name: 'Vatican', industry: 'Faith'},
    { id: 12, name: 'Jared Jewelery', industry: 'Jewelery'},
    { id: 13, name: 'Exxon', industry: 'Oil'},
    { id: 34, name: 'Wells Fargo', industry: 'Finance'},
    { id: 44, name: '411-PAIN', industry: 'Law'},
    { id: 56, name: 'Saul Goodman', industry: 'Law'}
  ];

  constructor() { }

  getPartners() {
    return this.partners;
  }

  getPartnerDetails(id: number) {
    return this.partners.filter(partner => partner.id === id)[0];
  }

}
