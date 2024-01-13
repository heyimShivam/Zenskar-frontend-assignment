import { useState } from "react";
import Draggable from "react-draggable";
import CanvasComponentTextEditor from "./CanvasComponent/CanvasComponentTextEditor";
import CanvasComponentButton from "./CanvasComponent/CanvasComponentButton";

import "./EditorCanvasBoard.css";
import CanvasComponentTable from "./CanvasComponent/CanvasComponentTable";
import CanvasComponentDropDown from "./CanvasComponent/CanvasComponentDropDown";

const EditorCanvasBoard = (props) => {
  const [showDotInCanvas, setShowDotInCanvas] = useState(false);

  function handleStart(event) {
    // console.log(event);
    setShowDotInCanvas(true);
  }

  function handleOnDrag(event) {
    // console.log(event);
  }

  function handleStop(event) {
    // console.log(event);
    setShowDotInCanvas(false);
  }

  return (
    <>
      <div className="main-container">
        {/* showDotInCanvas */}
        {/* <p className="editor-canvas-center-text">
          Drag & drop components here.
        </p> */}
        <div className="editor-canvas-foreground" style={{ padding: "10px" }}>
          <Draggable
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            grid={[25, 25]}
            onDrag={handleOnDrag}
            onStart={handleStart}
            onStop={handleStop}
          >
            <div className="canvas-dragable-block">Drag from here 1</div>
          </Draggable>
          <CanvasComponentTextEditor />
          <CanvasComponentButton />
          <CanvasComponentTable />
          <CanvasComponentDropDown />
        </div>
      </div>
    </>
  );
};

export default EditorCanvasBoard;
