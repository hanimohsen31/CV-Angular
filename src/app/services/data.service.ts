import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}
  ngOnInit() {}

  getData() {
    let url = environment.baseUrl + `/cv.json`;
    return this.httpClient.get(url);
  }

  updateData(data: any) {
    let url = environment.baseUrl + `/cv.json`;
    return this.httpClient.put(url, data);
  }
}
