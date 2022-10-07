# getline
Line input module for Deno

### Exemple

```ts
const name = getline("What's your name ? ");
console.log(`Hello ${name}`);
```

You can also set a limit

```ts
const name = getline("What's your name ? (20 chars max) ", 20);
console.log(`Hello ${name}`);
```
