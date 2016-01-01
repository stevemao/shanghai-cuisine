import test from 'ava';
import shanghaiCuisine from './';

test('Chinese surnames', t => {
	t.ok(shanghaiCuisine.length > 0);
});
