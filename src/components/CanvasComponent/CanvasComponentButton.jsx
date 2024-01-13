import React from "react";
import Draggable from "react-draggable";
import { useDispatch } from "react-redux";
import { updateComponentPosition } from "../../data/canvasComponentSlice";
import { showDots, hideDots } from "../../data/canvasBackgroundSlice";

import "./CanvasComponentButton.css";

const CanvasComponentButton = ({ properties, componentIndex }) => {
  const nodeRef = React.useRef(null);
  const dispatch = useDispatch();

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
      nodeRef={nodeRef}
    >
      <div className="canvas-btn" ref={nodeRef} href={properties.url}>
        {properties.value}
      </div>
    </Draggable>
  );
};

export default CanvasComponentButton;
