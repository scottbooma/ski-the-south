import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ResortsResponse } from '../models/ResortsResponse';
import { TrailMapResponse } from '../models/TrailMapResponse';

@Injectable({
  providedIn: 'root',
})
export class TrailMapService {
  constructor(private http: HttpClient) {}

  getResortMap(label: string) {
    return this.http.get<ResortsResponse>(`${environment.apiUrl}/resorts`).pipe(
      map((response) =>
        response.resorts.find((resort) => resort.label == label)
      ),
      mergeMap((resort) => this.getTrailMap(resort!.id))
    );
  }

  getTrailMap(id: number) {
    return this.http
      .get<TrailMapResponse>(`https://skimap.org/SkiAreas/view/${id}.json`)
      .pipe(map((response) => response.ski_maps));
  }
}
