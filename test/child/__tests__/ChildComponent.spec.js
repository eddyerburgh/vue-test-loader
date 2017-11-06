import ChildComponent from '../ChildComponent.vue'
import { mount } from 'vue-test-utils'

test('runs this test', () => {
  expect(mount(ChildComponent).is('div')).toBe(true)
})