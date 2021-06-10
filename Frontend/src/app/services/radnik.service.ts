import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RADNICI_SEKTORA_URL, RADNIK_URL } from '../app.constants';
import { Radnik } from '../models/radnik';

@Injectable({
  providedIn: 'root'
})
export class RadnikService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getRadnici(idSektora: number): Observable<any> {
    return this.httpClient.get(`${RADNICI_SEKTORA_URL}/${idSektora}`);
  }

  public addRadnik(radnik: Radnik): Observable<any> {
    radnik.id = 0;
    return this.httpClient.post(`${RADNIK_URL}`, radnik);
  }

  public updateRadnik(radnik: Radnik): Observable<any> {
    return this.httpClient.put(`${RADNIK_URL}`, radnik);
  }

  public deleteRadnik(id: number): Observable<any> {
    return this.httpClient.delete(`${RADNIK_URL}/${id}`);
  }
}
