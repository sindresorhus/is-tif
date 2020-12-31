# is-tif

> Check if a Buffer/Uint8Array is a [TIFF](https://en.wikipedia.org/wiki/TIFF) image


## Install

```
$ npm install is-tif
```


## Usage

##### Node.js

```js
const readChunk = require('read-chunk');
const isTif = require('is-tif');
const buffer = readChunk.sync('unicorn.tif', 0, 4);

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

Accepts a Buffer (Node.js) or Uint8Array.

It only needs the first 4 bytes.


## Related

- [file-type](https://github.com/sindresorhus/file-type) - Detect the file type of a Buffer/Uint8Array


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
