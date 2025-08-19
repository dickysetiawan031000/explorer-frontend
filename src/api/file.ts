import axios from "axios";

const API_URL = "http://localhost:3001/api/v1";

export interface File {
  id: number;
  name: string;
  folderId: number;
}

export async function getFilesByFolder(folderId: number): Promise<File[]> {
  const res = await axios.get(`${API_URL}/folders/${folderId}/files`);
  return res.data;
}

// Tambah file
export async function createFile(name: string, folderId: number) {
  const res = await axios.post(`${API_URL}/files`, { name, folderId })
  return res.data
}

// Update file
export async function updateFile(id: number, name: string) {
  const res = await axios.put(`${API_URL}/files/${id}`, { name })
  return res.data
}

// Delete file
export async function deleteFile(id: number) {
  const res = await axios.delete(`${API_URL}/files/${id}`)
  return res.data
}
