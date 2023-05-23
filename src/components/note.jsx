import React, { useState } from "react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const Note = () => {
  const [content, setContent] = useState("");

  const handleEditorChange = (value) => {
    setContent(value);
  };

  return (
    <div>
      <ReactQuill value={content} onChange={handleEditorChange} />
    </div>
  );
};

export default Note;
