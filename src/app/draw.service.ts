import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Assignment, Draw} from './model/DrawModel';
import {catchError} from 'rxjs/operators';
import {environment} from './../environments/environment';
import {handleError} from './utils';

@Injectable({
  providedIn: 'root'
})
export class DrawService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getDraw(id: string): Observable<Draw> {
    return this.http
      .get<Draw>(`${environment.apiUrl}/draws/${id}`, this.httpOptions)
      .pipe(catchError(handleError));
  }

  getAssignment(assignmentID: string): Observable<Assignment> {
    return this.http
      .get<Assignment>(`${environment.apiUrl}/assignments/${assignmentID}`, this.httpOptions)
      .pipe(catchError(handleError));
  }

  generateDraw(name, participantNames: string[], allowedAssignments: boolean[][]): Observable<Draw> {
    return this.http
      .post<Draw>(`${environment.apiUrl}/draws`, {name, participantNames, allowedAssignments}, this.httpOptions)
      .pipe(catchError(error => handleError(error)));
  }

}

