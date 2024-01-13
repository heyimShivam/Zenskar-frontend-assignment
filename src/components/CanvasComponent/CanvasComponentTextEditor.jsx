import React, { useState } from "react";
import Draggable from "react-draggable";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { updateComponentPosition } from "../../data/canvasComponentSlice";
import { showDots, hideDots } from "../../data/canvasBackgroundSlice";

import "./CanvasComponentTextEditor.css";

const CanvasComponentTextEditor = ({ properties, componentIndex }) => {
  const nodeRef = React.useRef(null);
  const [showEditInput, setShowEditInput] = useState(0);
  const [inputText, setInputText] = useState(properties.name);
  const dispatch = useDispatch();
  const showDotsBackground = useSelector(
    (store) => store.canvasBackground.showDotsBackground
  );

  function updateInputText(event) {
    setInputText(event.target.value);
  }

  function handleStart(event, dragElement) {
    dispatch(showDots());
  }

  function handleStop(event, dragElement) {
    dispatch(
      updateComponentPosition({
        componentIndex: componentIndex,
        dragableDefaultPosition: { x: dragElement.x, y: dragElement.y },
      })
    );
    dispatch(hideDots());
  }

  function handleTextInputClick() {
    if (showEditInput) {
      setShowEditInput(false);
      return;
    }

    setShowEditInput(true);
  }

  return (
    //  If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
    //  Unfortunately, in order for <Draggable> to work properly, we need raw access
    //  to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`.
    <Draggable
      defaultPosition={properties.dragableDefaultPosition}
      position={properties.dragablePosition}
      grid={properties.dragableGrid}
      onStart={handleStart}
      onStop={handleStop}
      handle="strong"
      nodeRef={nodeRef}
    >
      <div className="canvas-text-editor-block" ref={nodeRef}>
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
