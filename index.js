const fs = require('fs')
const babel = require('babel-core')
const babelPluginTransformRelativePaths = require('babel-plugin-transform-relative-paths')
const loaderUtils = require('loader-utils')
const path = require('path')

module.exports = function(source) {
  const options = loaderUtils.getOptions(this);

  const filename = parse(this.resourcePath).name

  const extension = (options && options.extension) || '.spec.js'
  const dir = `${this.context}/__tests__`

  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }

  const code = babel.transform(source, {plugins: [babelPluginTransformRelativePaths]}).code;

  const dest = `${dir}/${filename}${extension}`
  fs.writeFileSync(path, code)
  return source
};
