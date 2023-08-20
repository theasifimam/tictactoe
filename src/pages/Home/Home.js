import React, { useEffect } from "react";
import { buildFolderTree } from "../../utils";
import Folders from "../../components/FolderTree";

const Home = () => {
  const rawFolders = [
    { id: 0, folderName: "My Files", isParent: true, parentId: null },
    { id: 1, folderName: "Videos", isParent: false, parentId: 0 },
    { id: 2, folderName: "My Documents", isParent: true, parentId: null },
    { id: 3, folderName: "Documents", isParent: true, parentId: 2 },
    { id: 4, folderName: "Documents2", isParent: true, parentId: 3 },
    { id: 5, folderName: "Documents3", isParent: true, parentId: 4 },
  ];

  const folderTree = buildFolderTree(rawFolders);

  return (
    <div>
      <h1>Folder Tree</h1>
      <Folders folders={folderTree} />
    </div>
  );
};

export default Home;
