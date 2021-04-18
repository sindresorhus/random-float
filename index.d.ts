/* eslint-disable import/export */

/**
Generate a random [float](https://en.wikipedia.org/wiki/Floating_point).

@param minimum - Minimum float to return. Default: `1`.
@param maximum - Maximum float to return. Default: `1`.
@returns A float from `minimum` to `maximum`.

@example
```
import randomFloat from 'random-float';

randomFloat(5);
//=> 4.401887938147411

randomFloat(10, 100);
//=> 72.34217455144972
```
*/
export default function randomFloat(maximum?: number): number;
export default function randomFloat(minimum: number, maximum: number): number; // eslint-disable-line @typescript-eslint/unified-signatures
