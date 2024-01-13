import Draggable from "react-draggable";
import React from "react";
import { useDispatch } from "react-redux";
import { updateComponentPosition } from "../../data/canvasComponentSlice";
import { showDots, hideDots } from "../../data/canvasBackgroundSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./CanvasComponentDropDown.css";

const CanvasComponentDropDown = ({ properties, componentIndex }) => {
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
      handle="strong"
    >
      <div className="container canvas-drag-dropdown" ref={nodeRef}>
        <select className="hover-trigger">
          {properties.options.map((optionItem) => {
            return (
              <option key={optionItem.value} value={optionItem.value}>
                {optionItem.text}
              </option>
            );
          })}
        </select>
        <strong className="canvas-drag-dropdown-bar cursor hover-target">
          <FontAwesomeIcon icon={faBars} className="canvas-drag-drop" />
        </strong>
      </div>
    </Draggable>
  );
};

export default CanvasComponentDropDown;
