const fs = require('fs')
const babel = require('babel-core')
const babelPluginTransformRelativePaths = require('babel-plugin-transform-relative-paths')
const loaderUtils = require('loader-utils')

module.exports = function(source) {
  const options = loaderUtils.getOptions(this);

  const filename = this.resourcePath.substr(this.resourcePath.lastIndexOf('/') + 1).split('.')[0]

  const extension = (options && options.extension) || '.spec.js'
  const dir = `${this.context}/__tests__`

  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }

  const code = babel.transform(source, {plugins: [babelPluginTransformRelativePaths]}).code;

  const path = `${dir}/${filename}${extension}`
  fs.writeFileSync(path, code)
  return source
};
