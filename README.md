# Windows Explorer Web App

A simple **Windows Explorer-like web application** built with **Vue 3 + TypeScript** on the frontend and **Elysia** (Node.js) on the backend.  
Supports displaying folders and files, plus add/delete functionality using backend API.

**Repository Backend:** [https://github.com/dickysetiawan031000/explorer-backend](https://github.com/dickysetiawan031000/explorer-backend)  

---


## Frontend API Functions

**folder.ts**

```ts
export async function getAllFolders(): Promise<Folder[]>
export async function getFolderChildren(folderId: number): Promise<Folder[]>
export async function createFolder(name: string, parentId: number | null): Promise<Folder>
export async function deleteFolder(id: number): Promise<void>

```

**file.ts**

```ts
export async function getFilesByFolder(folderId: number): Promise<FileItem[]>
export async function createFile(name: string, folderId: number): Promise<FileItem>
export async function deleteFile(id: number): Promise<void>

```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
