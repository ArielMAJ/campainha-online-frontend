import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BellService {
  private readonly apiUrl = `${environment.endPoint}`;

  constructor(private httpClient: HttpClient) {}

  ringBell(apartmentId: number): Observable<any> {
    return this.httpClient.post<null>( `${this.apiUrl}/bell/${apartmentId}`, null);
  }
}
