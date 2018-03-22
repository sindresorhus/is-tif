import test from 'ava';
import readChunk from 'read-chunk';
import m from '.';

const check = filename => m(readChunk.sync(filename, 0, 4));

test('detects TIFF from Buffer', t => {
	t.true(check('fixture-little-endian.tif'));
	t.true(check('fixture-big-endian.tif'));
	t.false(check('fixture.png'));
});
