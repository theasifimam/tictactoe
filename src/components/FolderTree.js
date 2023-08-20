import React, { useState } from "react";
const FolderTree = ({ folders }) => {
  const [openedFolders, setOpenedFolders] = useState(new Set());

  const toggleFolder = (folderId) => {
    const newOpenedFolders = new Set(openedFolders);
    if (newOpenedFolders.has(folderId)) {
      newOpenedFolders.delete(folderId);
    } else {
      newOpenedFolders.add(folderId);
    }
    setOpenedFolders(newOpenedFolders);
  };

  const renderFolder = (folder) => {
    const isFolderOpened = openedFolders.has(folder.id);

    return (
      <div key={folder.id}>
        <p
          onClick={() => toggleFolder(folder.id)}
          style={{
            cursor: "pointer",
            width: "100px",
            height: "100px",
            border: "1px solid grey",
            background: "grey",
            borderRadius: "20px",
          }}
        >
          {folder.folderName}
        </p>
        {isFolderOpened && folder.children.length > 0 && (
          <ul>
            {folder.children.map((child) => (
              <li key={child.id}>{renderFolder(child)}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div>
      {folders.map((folder) => (
        <div key={folder.id}>{renderFolder(folder)}</div>
      ))}
    </div>
  );
};

export default FolderTree;
