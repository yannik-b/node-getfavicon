const getfavicon = require('../lib/getfavicon');


get()
async function get() {
  let favicon = await getfavicon('https://google.de/')
  console.log(favicon)
}
