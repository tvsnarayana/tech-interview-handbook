Security
==

## Glossary

- **XSS** - Cross-site scripting (XSS).

## XSS

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name;
```
