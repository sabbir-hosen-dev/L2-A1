# TypeScript Interview Blog

This blog covers two essential TypeScript concepts: the differences between `interface` and `type`, and the distinctions between `any`, `unknown`, and `never`. These concepts are frequently asked in interviews and are crucial for writing type-safe and maintainable TypeScript code.

---

## 1. Differences Between Interfaces and Types in TypeScript

When working with TypeScript, developers often encounter two primary ways to define custom types: interfaces and type aliases. While they share similarities, there are important distinctions between them.

### Interfaces

Interfaces are TypeScript's primary way to define the shape of an object. They are declaration-only and don't contain implementations. Key characteristics include:

- **Extensibility**: Interfaces can be extended using the `extends` keyword
- **Declaration merging**: Multiple interface declarations with the same name are automatically merged
- **Object-oriented**: Designed specifically for object shapes

Example:
```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  jobTitle: string;
}
```

### Type Aliases

Type aliases (`type`) are more flexible and can represent any type, not just object shapes. Their features include:

- **Union/Intersection**: Can create union (`|`) or intersection (`&`) types
- **Tuple types**: Can define tuple types directly
- **Primitive types**: Can alias primitive types
- **Mapped types**: Can be used in mapped types

Example:
```typescript
type ID = string | number;
type Coordinates = [number, number];
```

### Key Differences

1. **Declaration merging**: Only interfaces support this
2. **Extends/Implements**: Classes can `implement` interfaces or type aliases (if they represent object shapes)
3. **Complex types**: Type aliases can represent more complex types like unions, tuples, etc.
4. **Performance**: Interfaces are generally better for compiler performance in large codebases

**When to use which?**
- Use interfaces for object shapes, especially in public APIs
- Use type aliases for unions, tuples, or when needing to alias primitive types

## 2. Understanding `any`, `unknown`, and `never` in TypeScript

TypeScript provides several special types that serve distinct purposes in the type system.

### The `any` Type

`any` is the most flexible type in TypeScript. It essentially opts out of type checking:
- Allows assignment from/to any type
- Disables all type checking for values of this type
- Should be used sparingly as it defeats TypeScript's benefits

Example:
```typescript
let flexible: any = 4;
flexible = "hello"; // No error
flexible = true; // No error
```

### The `unknown` Type

`unknown` is TypeScript's type-safe counterpart to `any`:
- Accepts any value (like `any`)
- Doesn't allow operations on the value without type checking
- Requires type narrowing before use

Example:
```typescript
let uncertain: unknown = "hello";

// This would error:
// console.log(uncertain.toUpperCase());

if (typeof uncertain === "string") {
  console.log(uncertain.toUpperCase()); // OK
}
```

### The `never` Type

`never` represents values that should never occur:
- Used for functions that always throw exceptions
- Represents unreachable code
- Useful in exhaustive type checking

Example:
```typescript
function error(message: string): never {
  throw new Error(message);
}

function exhaustiveCheck(param: never): never {
  // Ensures all cases are handled
}
```

### Comparison Table

| Feature        | `any`          | `unknown`      | `never`        |
|---------------|---------------|---------------|---------------|
| Accepts any value | Yes | Yes | No |
| Allows arbitrary operations | Yes | No | No |
| Assignable to other types | Yes | No (without narrowing) | Yes (to any type) |
| Use case | Migration from JS | Type-safe alternative to `any` | Exhaustive checks, unreachable code |

**Best Practices:**
- Prefer `unknown` over `any` when you need type safety
- Use `never` for exhaustive type checking and functions that never return
- Avoid `any` unless absolutely necessary

