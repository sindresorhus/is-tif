import test from 'ava';
import {readChunkSync} from 'read-chunk';
import isTif from './index.js';

const check = filename => isTif(readChunkSync(filename, {length: 4}));

test('detects TIFF from Buffer', t => {
	t.true(check('fixture-little-endian.tif'));
	t.true(check('fixture-big-endian.tif'));
	t.false(check('fixture.png'));
});
