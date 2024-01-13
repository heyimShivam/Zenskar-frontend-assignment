import Draggable from "react-draggable";

import "./CanvasComponentDropDown.css";

const CanvasComponentDropDown = ({ properties }) => {
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

  return (
    <Draggable
      defaultPosition={properties.dragableDefaultPosition}
      position={properties.dragablePosition}
      grid={properties.dragableGrid}
      onDrag={handleOnDrag}
      onStart={handleStart}
      onStop={handleStop}
    >
      <div className="canvas-drag-dropdown">
        <select>
          {properties.options.map((optionItem) => {
            return <option value={optionItem.value}>{optionItem.text}</option>;
          })}
        </select>
      </div>
    </Draggable>
  );
};

export default CanvasComponentDropDown;
