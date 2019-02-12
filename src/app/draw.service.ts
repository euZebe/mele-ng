import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Assignment, Draw, Person} from './DrawModel';

@Injectable({
  providedIn: 'root'
})
export class DrawService {
  private readonly draws: Draw[];

  constructor() {
    const niobe: Person = {name: 'Niobé'};
    const ernest: Person = {name: 'Ernest'};
    const titoan: Person = {name: 'Titóan'};

    this.draws = [
      {
        id: '1i3jdh2',
        creationDate: new Date(),
        assignments: [
          {id: 'ass1', from: niobe, to: titoan},
          {id: 'ass2', from: titoan, to: ernest},
          {id: 'ass3', from: ernest, to: niobe}
        ]
      }
    ];
  }

  getDraw(id: string): Observable<Draw> {
    return of(this.draws.find(d => d.id === id));
  }

  getAssignment(assignmentID: string): Observable<Assignment> {
    return of(
      []
        .concat(...this.draws.map(d => d.assignments))
        .find(assignment => assignment.id === assignmentID)
    );
  }

  generateDraw(participants: string[], allowedAssignments: boolean[][]): Observable<Draw> {
    const draw = new Draw('1', [], new Date());
    this.draws.push(draw);
    return of(draw);
  }
}
