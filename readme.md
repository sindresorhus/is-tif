# is-tif

> Check if a Buffer/Uint8Array is a [TIFF](https://en.wikipedia.org/wiki/TIFF) image

## Install

```
$ npm install is-tif
```

## Usage

##### Node.js

```js
import {readChunkSync} from 'read-chunk';
import isTif from 'is-tif';

const buffer = readChunkSync('unicorn.tif', {length: 4});

isTif(buffer);
//=> true
```

##### Browser

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'unicorn.tif');
xhr.responseType = 'arraybuffer';

xhr.onload = () => {
	isTif(new Uint8Array(this.response));
	//=> true
};

xhr.send();
```

## API

### isTif(buffer)

Accepts a `Buffer` (Node.js) or `Uint8Array`.

It only needs the first 4 bytes.

## Related

- [file-type](https://github.com/sindresorhus/file-type) - Detect the file type of a Buffer/Uint8Array
