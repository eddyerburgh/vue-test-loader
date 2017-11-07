<template>
  <div>
    <SiblingComponent />
  </div>
</template>

<script>
  import SiblingComponent from '../SiblingComponent.vue'

  export default {
    name: 'child-component',
    components: {
      SiblingComponent
    }
  }
</script>

<test>
import ChildComponent from './ChildComponent.vue'
import SiblingComponent from '../SiblingComponent.vue'

import { mount } from 'vue-test-utils'

test('runs this test', () => {
  expect(mount(ChildComponent).is('div')).toBe(true)
})
</test>
