import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import {Assignment, Draw, Person} from './DrawModel';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DrawService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private readonly draws: Draw[];

  constructor(private http: HttpClient) {
  }

  getDraw(id: string): Observable<Draw> {
    return this.http
      .get<Draw>(`http://localhost:3000/draws/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getAssignment(assignmentID: string): Observable<Assignment> {
    return this.http
      .get<Assignment>(`http://localhost:3000/assignments/${assignmentID}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  generateDraw(name, participantNames: string[], allowedAssignments: boolean[][]): Observable<Draw> {
    return this.http
      .post<Draw>('http://localhost:3000/draws', {name, participantNames, allowedAssignments}, this.httpOptions)
      .pipe(catchError(error => this.handleError(error)));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      return throwError(`Something bad happened: ${error.error.message}`);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${JSON.stringify(error.error, null, 2)}`
      );
      if (error.error instanceof Array) {
        return throwError({message: 'Something bad happened; please try again later.', error: error.error});
      }
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
