export interface IJob {
  id: string;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string;
  company: Company;
}

export class Job {
  id: string;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string;
  company: Company;

  constructor(res: IJob) {
    this.id = res.id;
    this.title = res.title;
    this.type = res.type;
    this.description = res.description;
    this.location = res.location;
    this.salary = res.salary;
    this.company = res.company;
  }
}

export interface ICompany {
  name: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
}

export class Company {
  name: string = "";
  description: string = "";
  contactEmail: string = "";
  contactPhone: string = "";

  constructor(res: ICompany) {
    this.name = res.name;
    this.description = res.description;
    this.contactEmail = res.contactEmail;
    this.contactPhone = res.contactPhone;
  }
}
