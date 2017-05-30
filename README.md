node-getfavicon
===============

_node-getfavicon_ is a Node.js module which can extract the favicon url from
a website.

usage
-----
```javascript
const getfavicon = require('getfavicon')

async function get() {
  let favicon = await getfavicon('https://yannik-buerkle.de/')
  console.log(favicon)
}
get()
```

license
-------
This project is distributed under the MIT license.
