import Draggable from "react-draggable";

import "./CanvasComponentButton.css";

const CanvasComponentButton = ({properties}) => {
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
      <div className="canvas-btn" href={properties.url}>{properties.value}</div>
    </Draggable>
  );
};

export default CanvasComponentButton;
