export class Assignment {
  constructor(public id: string, public from: string, public to: string) {}
}

export class Draw {
  constructor(
    public id: string,
    public assignments: Assignment[],
    public creationDate?: Date
  ) {}
}
