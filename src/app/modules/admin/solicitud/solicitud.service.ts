import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private apiUrl = environment.apiUrl;
  eventCreate: Subject<void> = new Subject<void>();

  constructor(
      private _httpClient: HttpClient,
  ) { }

  registerRequest(payload): Observable<any> {
    return this._httpClient.post<any>(`${this.apiUrl}admision/register-request/`, payload);
  }
}
