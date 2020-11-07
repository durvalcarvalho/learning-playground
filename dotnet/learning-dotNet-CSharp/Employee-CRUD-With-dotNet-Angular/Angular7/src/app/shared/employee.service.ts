import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData: Employee;
  list: Employee[];
  readonly rootUrl = 'https://localhost:44354/api/';

  constructor(private http: HttpClient) { }

  postEmployee(formData: Employee) {
    return this.http.post(this.rootUrl + 'Employees/', formData);
  }

  putEmployee(formData: Employee) {
    return this.http.put(
      this.rootUrl + 'Employees/' + formData.EmployeeID,
      formData
    );
  }

  refreshList() {
    this.http.get(this.rootUrl + 'Employees/').toPromise()
      .then(res => this.list = res as Employee[]);
  }

  deleteEmployee(id: number) {
    return this.http.delete(this.rootUrl + 'Employees/' + id);
  }
}
