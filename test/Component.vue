<template>
  <div>
    <ChildComponent />
    <SiblingComponent />
  </div>
</template>

<script>
import ChildComponent from './child/ChildComponent.vue'
import SiblingComponent from './SiblingComponent.vue'

export default {
  name: 'test-component',
  components: {
    ChildComponent
  }
}
</script>

<test>
import Component from './Component.vue'
import SiblingComponent from './SiblingComponent.vue'
import ChildComponent from './child/ChildComponent.vue'

import { mount } from 'vue-test-utils'

test('runs this test', () => {
  expect(mount(Component).is('div')).toBe(true)
})
</test>
