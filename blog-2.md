# Keeping Typescript Code DRY with Omit Utility Types

## Introduction

As applications grow larger, developers often need multiple versions of the same data structure. For example, a user management system may require a full user object for database operation, a smaller version for displaying profile information, and another version for registration forms. Creating separate interface for each use case can lead to code duplication and maintenance issue.

Typescript provides two powerful utility types, `Pick` and `Omit`, that help developer create specialized versions of existing interfaces while keeping their code DRY (Don't repeat yourself)

## Understanding the Problem

consider the following master interface

```ts
interface User{
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;

}
```

Without utility types, we might create multiple interfaces manually;

```ts
interface UserProfile{
    id: number;
    name: string;
    email: string;
}

interface UserRegistration {
    name: string;
    email: string;
    password: string;
}
```

This approach repeats property definition and increases maintenance effort.

## Using Pick

The `Pick` utility type creates a new type by selecting specific properties from an existing interface.

```ts
type UserProfile = Pick<User, "id" | "name" | "email">;
```

The resulting type contains only the selected properties;

```ts
{
    id: number;
    name: string;
    email: string;
}
```

This allow developer to reuse the original interface instead of rewriting properties.

## Using Omit

The `Omit` utility type creates a new type by removing specific properties from an existing interface.

```ts
type PublicUser = Omit<User, "password">;
```

The resulting type includes all properties except `password`.

```ts

{
    id: number;
    name: string;
    email: string;
    createdAt: Date;
}
```

This is especially useful when sensitive information should not be exposed.

## How Pick and Omit Keep code DRY(Don't repeat Yourself)

1. Eliminating repeated property declarations.
2. Using a single source of truth through the master interface.
3. Automatically reflecting changes made to the original interface.
4. reducing maintenance costs and potential bugs.


For example, if the `email` property type changes in the `User` interface, all derived types created with `Pick` or `Omit` update automatically.


## Conclusion

TypeScript's `Pick` and `Omit` utility types are excellent tools for creating specialized "slices" of a master interface without duplicating code. By deriving new types from existing ones, developers can maintain a single source of truth, reduce errors, and keep their applications clean, scalable, and DRY.
