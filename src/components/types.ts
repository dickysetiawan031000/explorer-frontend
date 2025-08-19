
export interface FileItem {
  id: number;
  name: string;
  folderId: number;
}

export interface Folder {
  id: number;
  name: string;
  parentId: number | null;
  children?: Folder[];
  files?: FileItem[];
}
