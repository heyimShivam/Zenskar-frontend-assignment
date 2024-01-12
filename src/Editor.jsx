import React from "react";
import EditorCanvas from "./components/EditorCanvas";
import EditorPicker from "./components/EditorPicker";

import "./Editor.css";


const Editor = (props) => {
  return (
    <div className="editor">
      <EditorCanvas />
      <EditorPicker />
    </div>
  );
};

export default Editor;
