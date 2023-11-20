interface IUser {
  firstName: string;
  surname: string;
  gender: string;
  age: number;
  checked: boolean;
}

export class User implements IUser {
  public firstName;
  public surname;
  public gender;
  public age;
  public checked: boolean;
  constructor(userObj: IUser) {
    this.firstName = userObj.firstName;
    this.surname = userObj.surname;
    this.gender = userObj.gender;
    this.age = userObj.age;
    this.checked = userObj.checked;
  }
}
