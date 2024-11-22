export class Contact {
  id ?: number ;
  firstName : string = '';
  lastName: string = '' ;
  country?: string;
  designation: string = '';
  company?: string;
  email: string ='';
  phone?: string;
  industry?: string;
  message?: string;
  dateCreated?: string;
  termsConsent: boolean = false;
}
