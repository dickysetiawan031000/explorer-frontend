import { mount } from '@vue/test-utils'
import FolderTree from '../FolderTree.vue'
import { describe, expect, it } from 'vitest'

const mockFolders = [
  {
    id: 1,
    name: 'Root',
    parentId: null,
    children: [
      { id: 2, name: 'Child 1', parentId: 1 },
      { id: 3, name: 'Child 2', parentId: 1 }
    ]
  }
]

describe('FolderTree.vue', () => {
  it('renders folder tree from props', () => {
    const wrapper = mount(FolderTree, {
      props: { folders: mockFolders }
    })
    expect(wrapper.text()).toContain('Root')
    expect(wrapper.text()).toContain('Child 1')
    expect(wrapper.text()).toContain('Child 2')
  })

  it('emits select event on folder click', async () => {
    const wrapper = mount(FolderTree, {
      props: { folders: mockFolders }
    })
    const folderItem = wrapper.find('.folder-item')
    await folderItem.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('select')
    expect(wrapper.emitted('select')![0][0]).toEqual(mockFolders[0])
  })
})
