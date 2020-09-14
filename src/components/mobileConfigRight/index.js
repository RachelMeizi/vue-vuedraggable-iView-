const path = require('path')
const files = require.context('./', false, /\.vue$/)

const modules = {}
files.keys().forEach(key => {
    const name = path.basename(key, '.vue')
    modules[name] = files(key).default || files(key)
})
console.log(modules,'modules')

export default modules
