export function buildFolderTree(folders) {
  const folderMap = new Map();

  folders.forEach((folder) => {
    folder.children = [];
    folderMap.set(folder.id, folder);
  });

  const rootFolders = [];

  folders.forEach((folder) => {
    if (folder.isParent && folder.parentId === null) {
      rootFolders.push(folder);
    } else if (folderMap.has(folder.parentId)) {
      const parentFolder = folderMap.get(folder.parentId);
      parentFolder.children.push(folder);
    }
  });

  return rootFolders;
}
