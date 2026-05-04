import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer', () => {
  it('renders the current year', () => {
    const wrapper = mount(Footer)
    const year = new Date().getFullYear()
    expect(wrapper.text()).toContain(year.toString())
  })

  it('renders the brand placeholder', () => {
    const wrapper = mount(Footer)
    expect(wrapper.text()).toContain('Brand')
  })

  it('renders all expected links', () => {
    const wrapper = mount(Footer)
    const links = wrapper.findAll('a')
    expect(links.length).toBeGreaterThanOrEqual(3)
  })
})
