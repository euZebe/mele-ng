export class Person {
  name: string;
}

export class Assignment {
  from: Person;
  to: Person;
}

export class Draw {
  id: string;
  assignments: Assignment[];
  creationDate?: Date;
}
