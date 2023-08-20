import React, { useState } from "react";

const Folder = ({ parent }) => {
  return (
    <>
      <div className="parent">{parent.folderName}</div>
    </>
  );
};

export default Folder;
