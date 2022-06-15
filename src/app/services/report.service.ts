import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Report } from '../models/Report';
import { ReportsResponse } from '../models/ReportResponse';

type ReportResponse = {
  report: {
    id: number;
    name: string;
    date: string;
    vibe: number;
    description: string;
    label: string;
  };
};
@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private http: HttpClient) {}

  getReports() {
    return this.http.get<ReportsResponse>(`${environment.apiUrl}/reports`);
  }

  addReport(report: Report) {
    return this.http.post<ReportResponse>(
      `${environment.apiUrl}/reports`,
      report
    );
  }

  deleteReport(id: number) {
    return this.http.delete<Report>(`${environment.apiUrl}/reports/${id}`);
  }

  editReport(report: Report) {
    return this.http.put<ReportResponse>(
      `${environment.apiUrl}/reports/${report.id}`,
      report
    );
  }
}
