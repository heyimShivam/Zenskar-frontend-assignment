import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Draggable from "react-draggable";

import "./CanvasComponentTextEditor.css";

const CanvasComponentTextEditor = ({properties}) => {
  const [showEditInput, setShowEditInput] = useState(0);
  const [inputText, setInputText] = useState(properties.name);

  function updateInputText(event) {
    setInputText(event.target.value);
  }

  function handleStart(event) {
    // console.log(event);
    // setShowDotInCanvas(true);
  }

  function handleOnDrag(event) {
    // console.log(event);
  }

  function handleStop(event) {
    // console.log(event);
    // setShowDotInCanvas(false);
  }

  function handleTextInputClick() {
    if (showEditInput) {
      setShowEditInput(false);
      return;
    }

    setShowEditInput(true);
  }

  return (
    <Draggable
      defaultPosition={properties.dragableDefaultPosition}
      position={properties.dragablePosition}
      grid={properties.dragableGrid}
      onDrag={handleOnDrag}
      onStart={handleStart}
      onStop={handleStop}
      handle="strong"
    >
      <div className="canvas-text-editor-block ">
        {showEditInput ? (
          <>
            <div className="canvas-text-editor-block-edit">
              <input
                type="text"
                onChange={updateInputText}
                value={inputText}
                placeholder="Text Input"
              />
              <button onClick={handleTextInputClick}>done</button>
            </div>
            <strong className="cursor">
              <FontAwesomeIcon icon={faBars} className="canvas-drag-drop" />
            </strong>
          </>
        ) : (
          <div className="container">
            <div
              className="text-editor hover-trigger"
              onClick={handleTextInputClick}
            >
              {inputText}
            </div>
            <strong className="cursor hover-target">
              <FontAwesomeIcon icon={faBars} className="canvas-drag-drop" />
            </strong>
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default CanvasComponentTextEditor;
