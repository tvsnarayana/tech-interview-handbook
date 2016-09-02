### Strict Mode

1. Strict mode eliminates some JavaScript silent errors by changing them to throw errors. 
2. Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations. Strict mode code can sometimes be made to run faster than identical code that's not strict mode. 
3. Strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.

**Converting Mistakes into Errors**
- Prevent accidental creation of global variables.
- Makes assignments which would otherwise silently fail throw an exception.
- Makes attempts to delete undeletable properties throw errors.
- Requires that all properties named in an object literal be unique. Duplicate property names are a syntax error in strict mode.
- Requires that function parameter names be unique. In normal code the last duplicated argument hides previous identically-named arguments. 
- Forbids setting properties on primitive values in ES6. Without strict mode, setting properties is simply ignored (no-op), with strict mode, however, a TypeError is thrown.

**Simplifying Variable Uses**
- Prohibits `with`.
- `eval` of strict mode code does not introduce new variables into the surrounding scope. 
- Forbids deleting plain variables. `delete` name in strict mode is a syntax error: `var x; delete x; // !!! syntax error`.

**Paving the way for future ECMAScript versions**
- Future ECMAScript versions will likely introduce new syntax, and strict mode in ECMAScript 5 applies some restrictions to ease the transition. It will be easier to make some changes if the foundations of those changes are prohibited in strict mode.
- First, in strict mode a short list of identifiers become reserved keywords. These words are `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, and `yield`. In strict mode, then, you can't name or use variables or arguments with these names.
- Second, strict mode prohibits function statements not at the top level of a script or function. 
