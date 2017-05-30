const getfavicon = require('../lib/getfavicon');


get()
async function get() {
  let favicon = await getfavicon('https://yannik-buerkle.de/')
  console.log(favicon)
}
