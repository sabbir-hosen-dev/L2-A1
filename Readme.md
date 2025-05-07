#  TypeScript Interview Blog

This blog covers two essential TypeScript concepts: the differences between `interface` and `type`, and the distinctions between `any`, `unknown`, and `never`. These concepts are frequently asked in interviews and are crucial for writing type-safe and maintainable TypeScript code.

---

##  1. What are some differences between interfaces and types in TypeScript?

TypeScript allows us to describe object shapes using both `interface` and `type`. While they often appear similar, they have key differences:

###  `interface`

- Ideal for defining **object shapes**.
- Supports **declaration merging** (multiple declarations combine into one).
- Often preferred in **OOP-style** code and public APIs.
- Can be **extended** using `extends`.

```ts
interface Person {
  name: string;
  age: number;
}

interface Person {
  gender: string;
}

const user: Person = {
  name: "Ersa",
  age: 20,
  gender: "Male"
};
