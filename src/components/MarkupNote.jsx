import React, { useState } from "react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const MarkupNote = () => {
  const [content, setContent] = useState("");

  const handleEditorChange = (value) => {
    setContent(value);
  };

  const quillStyle = {
    height: "100%",
  };

  return (
    <div
      style={{
        width: "800px",
        height: "500px",
        backgroundColor: "#fff",
      }}
    >
      <ReactQuill
        value={content}
        onChange={handleEditorChange}
        style={quillStyle}
      />
    </div>
  );
};

export default MarkupNote;
