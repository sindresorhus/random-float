/**
Generate a random [float](https://en.wikipedia.org/wiki/Floating_point).

@param minimumValue - Minimum float to return. Default: `1`.
@param maximumValue - Maximum float to return. Default: `1`.
@returns A float from `minimumValue` to `maximumValue`.

@example
```
import randomFloat = require('random-float');

randomFloat(5);
//=> 4.401887938147411

randomFloat(10, 100);
//=> 72.34217455144972
```
*/
declare function randomFloat(maximumValue?: number): number;
declare function randomFloat(
	minimumValue: number,
	maximumValue: number
): number;

export = randomFloat;
