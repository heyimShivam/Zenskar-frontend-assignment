import Draggable from "react-draggable";
import React from "react";
import { useDispatch } from "react-redux";

import { updateComponentPosition } from "../../data/canvasComponentSlice";
import { showDots, hideDots } from "../../data/canvasBackgroundSlice";

import "./CanvasComponentTable.css";

const CanvasComponentTable = ({ properties, componentIndex }) => {
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
      <div className="canvas-table" ref={nodeRef}>
        <table>
          <thead>
            <tr>
              {properties.tableHeading.map((value, index) => {
                return <th key={index}>{value}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {properties.tableRow.map((value, index) => {
              return (
                <tr key={index}>
                  {value.map((td, index) => {
                    return <td key={index}>{td}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Draggable>
  );
};

export default CanvasComponentTable;
