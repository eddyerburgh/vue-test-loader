const fs = require('fs')

module.exports = function(source) {
  const filename = this.resourcePath.substr(this.resourcePath.lastIndexOf('/') + 1).split('.')[0]

  const extension = '.spec.js'
  const dir = `${this.context}/${this.options.extension || '__tests__'}`

  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }

  const path = `${dir}/${filename}${extension}`
  fs.writeFileSync(path, source.replace(/('..\/)/, "'../../").replace(/('.\/)/, "'../").trim())
  return source
};
