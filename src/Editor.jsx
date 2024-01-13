import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';

import EditorCanvas from "./components/EditorCanvas";
import EditorPicker from "./components/EditorPicker";
import { fetchLocalStorageData } from "./data/canvasComponentSlice";

import "./Editor.css";

const Editor = (props) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchLocalStorageData());
  }, []);

  return (
    <div className="editor">
      <EditorCanvas />
      <EditorPicker />
    </div>
  );
};

export default Editor;
