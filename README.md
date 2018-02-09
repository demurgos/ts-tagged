# ts-tagged

Defines the `Tagged<T, N>` generic type letting you created tagged types with base type `T` and name `N`.
Two variables of a tagged type can only be assigned to each other if they have the same base type and name.

This implements a weak form of nominal typing suitable for types shared across multiple packages.

## Installation

```bash
npm install -S ts-tagged
```

## Example

```typescript
import { Tagged } from "ts-tagged";

type Email = Tagged<string, "Email">;
type DisplayName = Tagged<string, "DisplayName">;

const email: Email = "foo@example.com";
const displayName: DisplayName = "Foo Bar";

function sendEmail(recipient: Email) {
  // ...
}

sendEmail(email); // OK
sendEmail(displayName); // Compilation error: the names don't match
sendEmail("bar@example.com"); // OK: Unnamed, but the base type matches
sendEmail(42); // Compilation error: The base type does not match
```

## License

[MIT License](./LICENSE.md)
