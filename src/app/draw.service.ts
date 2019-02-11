import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Draw, Person} from './DrawModel';

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
          {from: niobe, to: titoan},
          {from: titoan, to: ernest},
          {from: ernest, to: niobe}
        ]
      }
    ];
  }

  getDraw(id: string): Observable<Draw> {
    return of(this.draws.find(d => d.id === id));
  }
}
