import { mount } from '@vue/test-utils'
import App from '../App.vue'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('mounts renders properly', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Folder Explorer') // update teks sesuai App.vue
  })
})
