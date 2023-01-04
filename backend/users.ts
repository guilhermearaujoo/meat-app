export class User {
  constructor(
    public email: string,
    public name: string,
    private password: string
  ) {}

  matches(another: User): boolean {
    return (
      another !== undefined &&
      another.email === this.email &&
      another.password === this.password
    );
  }
}

export const users = {
  "ghma.em@gmail.com": new User(
    "ghma.em@gmail.com",
    "Guilherme",
    "G78317886g!"
  ),
  "clefidelis@gmail.com": new User(
    "clefidelis@gmail.com",
    "Clécia",
    "clecia19!"
  ),
};
