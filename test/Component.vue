<template>
  <div>
    <ChildComponent />
  </div>
</template>

<script>
import ChildComponent from './child/ChildComponent.vue'

export default {
  name: 'test-component',
  components: {
    ChildComponent
  }
}
</script>

<test>
import Component from './Component.vue'
import { mount } from 'vue-test-utils'

test('runs this test', () => {
  expect(mount(Component).is('div')).toBe(true)
})
</test>
