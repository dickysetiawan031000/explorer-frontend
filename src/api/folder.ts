// src/api/folder.ts
import axios from "axios";
import type { Folder, FileItem } from "../components/types";

const API_URL = "http://localhost:3001/api/v1";

export async function getAllFolders(): Promise<Folder[]> {
  const res = await axios.get(`${API_URL}/folders`);
  return Array.isArray(res.data) ? res.data : res.data?.data ?? [];
}

export async function getFolderChildren(folderId: number): Promise<Folder[]> {
  const res = await axios.get(`${API_URL}/folders/${folderId}/children`);
  return Array.isArray(res.data) ? res.data : res.data?.data ?? [];
}

export async function getFolderFiles(folderId: number): Promise<FileItem[]> {
  const res = await axios.get(`${API_URL}/folders/${folderId}/files`);
  return Array.isArray(res.data) ? res.data : res.data?.data ?? [];
}

// Tambah folder
export async function createFolder(name: string, parentId: number | null) {
  const res = await axios.post(`${API_URL}/folders`, { name, parentId })
  return res.data
}

// Update folder
export async function updateFolder(id: number, name: string) {
  const res = await axios.put(`${API_URL}/folders/${id}`, { name })
  return res.data
}

// Delete folder
export async function deleteFolder(id: number) {
  const res = await axios.delete(`${API_URL}/folders/${id}`)
  return res.data
}
