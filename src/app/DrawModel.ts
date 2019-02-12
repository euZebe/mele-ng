export class Person {
  constructor(public name: string) {}
}

export class Assignment {
  constructor(public id: string, public from: Person, public to: Person) {}
}

export class Draw {
  constructor(
    public id: string,
    public assignments: Assignment[],
    public creationDate?: Date
  ) {}
}
