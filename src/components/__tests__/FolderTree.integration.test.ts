import { mount } from "@vue/test-utils";
import FolderTree from "../FolderTree.vue";
import type { Folder } from "../types";
import { describe, expect, it } from 'vitest'

const folders: Folder[] = [
  { id: 1, name: "Root", parentId: null, children: [
      { id: 2, name: "Child", parentId: 1, children: [] },
    ]},
];

describe("FolderTree.vue integration", () => {
  it("emits select event on root folder click", async () => {
    const wrapper = mount(FolderTree, { props: { folders } });

    // tunggu DOM update
    await wrapper.vm.$nextTick();

    // cari FolderNode pertama
    const rootNode = wrapper.find(".folder-item");
    expect(rootNode.exists()).toBe(true);

    await rootNode.trigger("click");

    const emitted = wrapper.emitted("select");
    expect(emitted).toBeTruthy();
    expect(emitted![0][0].name).toBe("Root");
  });

  it("emits select event on child folder click", async () => {
    const wrapper = mount(FolderTree, { props: { folders } });
    await wrapper.vm.$nextTick();

    // cari semua folder-item
    const folderItems = wrapper.findAll(".folder-item");
    expect(folderItems.length).toBeGreaterThan(1);

    // klik folder child (index 1)
    await folderItems[1].trigger("click");

    const emitted = wrapper.emitted("select");
    expect(emitted).toBeTruthy();
    expect(emitted![0][0].name).toBe("Child");
  });
});
