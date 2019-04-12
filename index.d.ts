/**
Generate a random [float](https://en.wikipedia.org/wiki/Floating_point).

@param minimum - Minimum float to return. Default: `1`.
@param maximum - Maximum float to return. Default: `1`.
@returns A float from `minimum` to `maximum`.

@example
```
import randomFloat = require('random-float');

randomFloat(5);
//=> 4.401887938147411

randomFloat(10, 100);
//=> 72.34217455144972
```
*/
declare function randomFloat(maximum?: number): number;
declare function randomFloat(minimum: number, maximum: number): number;

export = randomFloat;
