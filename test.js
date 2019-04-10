import test from 'ava';
import numberIsFloat from 'number-is-float';
import inRange from 'in-range';
import stableFn from 'stable-fn';
import randomFloat from '.';

function inRangeCheck(min, max) {
	return stableFn(() => inRange(randomFloat(min, max), min, max));
}

test('main', t => {
	t.true(numberIsFloat(randomFloat(0, 10)));
	t.false(stableFn(() => randomFloat(1)));
	t.true(stableFn(() => inRange(randomFloat(1), 0, 1)));
	t.true(inRange(randomFloat(1), 0, 1));
	t.true(inRangeCheck(0, 0.1));
	t.true(inRangeCheck(0, 1));
	t.true(inRangeCheck(0, 2));
	t.true(inRangeCheck(0, 10));
	t.true(inRangeCheck(0, 100));
	t.true(inRangeCheck(0, 0));
	t.true(inRangeCheck(0, 1));
	t.true(inRangeCheck(0, 2));
	t.true(inRangeCheck(0, 10));
	t.true(inRangeCheck(0, 100));
	t.true(inRangeCheck(5, 10));
	t.true(inRangeCheck(524234213, 99999999999));
	t.true(inRangeCheck(-10, -5));
});
