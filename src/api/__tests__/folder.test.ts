import { describe, it, expect, vi, beforeEach } from "vitest";
import axios from "axios";
import { getAllFolders, getFolderChildren, Folder } from "../folder";

// Mock axios
vi.mock("axios");

describe("Folder API Client", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("getAllFolders returns all folders", async () => {
    const mockData: Folder[] = [
      { id: 1, name: "Root", parentId: null },
      { id: 2, name: "Child", parentId: 1 },
    ];

    (axios.get as any).mockResolvedValue({ data: mockData });

    const result = await getAllFolders();
    expect(result).toEqual(mockData);
    expect(result.length).toBe(2);
    expect(result[0].name).toBe("Root");
  });

  it("getFolderChildren returns children for a given parentId", async () => {
    const mockData: Folder[] = [
      { id: 2, name: "Child", parentId: 1 },
      { id: 3, name: "Child2", parentId: 1 },
    ];

    (axios.get as any).mockResolvedValue({ data: mockData });

    const result = await getFolderChildren(1);
    expect(result).toEqual(mockData);
    expect(result.every(f => f.parentId === 1)).toBe(true);
  });
});
