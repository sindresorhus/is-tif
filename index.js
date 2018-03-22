'use strict';
module.exports = buffer => {
	if (!buffer || buffer.length < 4) {
		return false;
	}

	return (buffer[0] === 73 &&
		buffer[1] === 73 &&
		buffer[2] === 42 &&
		buffer[3] === 0) ||
		(buffer[0] === 77 &&
		buffer[1] === 77 &&
		buffer[2] === 0 &&
		buffer[3] === 42);
};
