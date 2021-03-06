import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  private BASE_URL: string = environment.BASE_API;
  constructor(private httpClient: HttpClient) { }
  getCategories() {
    return this.httpClient.get(`${this.BASE_URL}/api/get/category`);
  }
  getMostViewedLevels() {
    return this.httpClient.get(`${this.BASE_URL}/api/level/mostviewed`);
  }

  getStatistics() {
    return this.httpClient.get(`${this.BASE_URL}/api/statistics/total`);
  }
  getMostViewedCategories() {
    return this.httpClient.get(`${this.BASE_URL}/api/category/mostviewed`);
  }
  contactUs(details) {
    return this.httpClient.post(`${this.BASE_URL}/api/contact`, details);
  }

  invite(email) {
    return this.httpClient.post(`${this.BASE_URL}/api/invite`, email);
  }
  report(report: object) {
    return this.httpClient.post(`${this.BASE_URL}/api/report`, report);
  }
}
