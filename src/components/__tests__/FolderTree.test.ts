import { mount, shallowMount } from "@vue/test-utils";
import FolderTree from "../FolderTree.vue";
import FolderNode from "../FolderNode.vue";
import type { Folder } from "../types";
import axios from "axios";
import { describe, expect, it, vi } from 'vitest'

vi.mock("axios");

const folders: Folder[] = [
  { id: 1, name: "Root", parentId: null, children: [{ id: 2, name: "Child", parentId: 1 }] },
];

describe("FolderTree.vue", () => {
  it("renders folder nodes", () => {
    const wrapper = shallowMount(FolderTree, { props: { folders } });
    expect(wrapper.findComponent(FolderNode).exists()).toBe(true);
  });

  it("emits select event when folder clicked", async () => {
    const wrapper = mount(FolderTree, { props: { folders } });
    await wrapper.vm.$nextTick();

    const node = wrapper.findComponent(FolderNode);
    await node.trigger("click");

    expect(wrapper.emitted("select")).toBeTruthy();
    expect(wrapper.emitted("select")![0][0].name).toBe("Root");
  });

  it("fetches folders if no props provided", async () => {
    const mockData: Folder[] = [{ id: 3, name: "Fetched", parentId: null }];
    (axios.get as any).mockResolvedValue({ data: mockData });

    const wrapper = mount(FolderTree);
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(wrapper.vm.folderList).toEqual(mockData);
  });
});
