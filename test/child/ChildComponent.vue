<template>
  <div />
</template>

<script>
  export default {
    name: 'child-component'
  }
</script>

<test>
import ChildComponent from './ChildComponent.vue'
import { mount } from 'vue-test-utils'

test('runs this test', () => {
  expect(mount(ChildComponent).is('div')).toBe(true)
})
</test>
