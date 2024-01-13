import { useState } from "react";
import Draggable from "react-draggable";

import CanvasComponentTextEditor from "./CanvasComponent/CanvasComponentTextEditor";
import CanvasComponentButton from "./CanvasComponent/CanvasComponentButton";
import CanvasComponentTable from "./CanvasComponent/CanvasComponentTable";
import CanvasComponentDropDown from "./CanvasComponent/CanvasComponentDropDown";
import { canvasBoardComponentData } from "../data/canvasBoardComponentData";

import "./EditorCanvasBoard.css";

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
          {/* <Draggable
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            grid={[25, 25]}
            onDrag={handleOnDrag}
            onStart={handleStart}
            onStop={handleStop}
          >
            <div className="canvas-dragable-block">Drag from here 1</div>
          </Draggable> */}

          {canvasBoardComponentData.map((value, index) => {
            if (value.id === "textInput") {
              return <CanvasComponentTextEditor key={index} properties={value} />;
            } else if (value.id === "button") {
              return <CanvasComponentButton key={index} properties={value} />;
            } else if (value.id === "dropdown") {
              return <CanvasComponentDropDown key={index} properties={value} />;
            } else if (value.id === "table") {
              return <CanvasComponentTable key={index} properties={value} />;
            }
            return <></>;
          })}
        </div>
      </div>
    </>
  );
};

export default EditorCanvasBoard;
