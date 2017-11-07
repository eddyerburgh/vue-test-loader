# vue-test-loader

Extract custom test blocks into .spec files

## Usage

Install the loader:
```shell
npm install --save-dev vue-test-loader
```

Setup vue-loader to pass the test block to the loader:

```js
module.exports = {
  // The rest of the config
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'test': 'vue-test-loader'
          },
        }
      }
    ]
  }
}
```

Write tests inside a custom <test> block:

```vue
<template>
  <div />
</template>

<script>
export default {
  name: 'example-component'
}
</script>

<test>
import { shallow } from 'vue-test-utils'
import ExampleComponent from './ExampleComponent'

describe('ExampleComponent', () => {
    test('is div', () => {
      expect(shallow(ExampleComponent).is('div')).toBe(true)
    })
})
</test>
```

vue-test-loader will create a `.spec.js` file in a `__tests__` directory inside the component directory.

This works best with Jest.
