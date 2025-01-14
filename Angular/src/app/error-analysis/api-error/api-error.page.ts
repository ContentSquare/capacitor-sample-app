import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-api-error',
  templateUrl: './api-error.page.html',
  styleUrls: ['./api-error.page.scss'],
})
export class ApiErrorPage implements OnInit {
  public APIErrorForm!: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.APIErrorForm = this.formBuilder.group({
      method: ['GET'],
      status: ['200'],
      q_param: ['foo'],
      q_second_param: ['bar'],
      email: ['foo@email.com'],
    });
  }

  submitForm() {
    let params = new HttpParams();
    const status = this.APIErrorForm.value.status;
    const method = this.APIErrorForm.value.method;
    const URL = 'https://httpstatus-dev.eu-west-1.csq.fr';

    if (this.APIErrorForm.value.q_param != '') {
      params = params.append('firstParameter', this.APIErrorForm.value.q_param);
    }
    if (this.APIErrorForm.value.q_second_param != '') {
      params = params.append(
        'secondParameter',
        this.APIErrorForm.value.q_second_param
      );
    }
    if (this.APIErrorForm.value.email != '') {
      params = params.append('email', this.APIErrorForm.value.email);
    }

    switch (method) {
      case 'GET':
        this.http.get(`${URL}/${status}`, { params: params }).subscribe();
        break;
      case 'POST':
        this.http
          .post(`${URL}/${status}`, { foo: 'bar' }, { params: params })
          .subscribe();
        break;
      case 'PUT':
        this.http
          .put(`${URL}/${status}`, { foo: 'bar' }, { params: params })
          .subscribe();
        break;
      case 'DELETE':
        this.http.delete(`${URL}/${status}`, { params: params }).subscribe();
        break;
      default:
        this.http.get(`${URL}/${status}`, { params: params }).subscribe();
    }
  }
}
