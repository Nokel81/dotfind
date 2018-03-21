This package is used to search through objects given a dot notation path of the route.

Examples:
```js
const dotfind = require("dotfind");

const obj = {a: 5};
dotfind("a", obj); //5
```

```js
const dotfind = require("dotfind");

const obj = {a: b: 5};
dotfind("a.b", obj); //5
```

```js
const dotfind = require("dotfind");

const obj = {"a.b": 5};
dotfind("a.b", obj); //5
```

```js
const dotfind = require("dotfind");

const obj = {a: {"b.c": 5}};
dotfind("a.b.c", obj); //5
```

```js
const dotfind = require("dotfind");

const obj = {a: [{b: 5}]};
dotfind("a.0.b", obj); //5
dotfind("a[0].b", obj); //5
```
