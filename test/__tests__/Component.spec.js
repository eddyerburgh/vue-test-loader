import Component from '../Component.vue'
import { mount } from 'vue-test-utils'

test('runs this test', () => {
  expect(mount(Component).is('div')).toBe(true)
})