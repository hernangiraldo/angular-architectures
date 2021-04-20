export class UserModel {
  #name: string;
  #id: number;

  constructor(id: number, name: string) {
    this.#id = id;
    this.#name = name;
  }

  get name(): string {
    return this.#name;
  }

  set name(value: string) {
    this.#name = value;
  }

  get id(): number {
    return this.#id;
  }

  set id(value: number) {
    this.#id = value;
  }
}
