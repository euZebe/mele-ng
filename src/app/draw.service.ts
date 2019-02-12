import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import { generate } from 'shortid';
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

  generateDraw(participantNames: string[], allowedAssignments: boolean[][]): Observable<Draw> {
    // FIXME: deal with allowedAssignments
    const participants = participantNames.map(name => new Person(name));
    const assignments = participants.map((p, index) => ({
      id: generate(),
      from: p,
      to: index === 0 ? participants[participants.length - 1] : participants[index - 1]
    }));
    const draw = new Draw(generate(), assignments, new Date());
    this.draws.push(draw);
    console.log('creating new draw', JSON.stringify(draw));
    return of(draw);
  }
}
