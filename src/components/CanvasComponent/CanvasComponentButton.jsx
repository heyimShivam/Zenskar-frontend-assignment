import Draggable from "react-draggable";

import "./CanvasComponentButton.css";

const CanvasComponentButton = (props) => {
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
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      grid={[25, 25]}
      onDrag={handleOnDrag}
      onStart={handleStart}
      onStop={handleStop}
    >
      <div className="canvas-btn">Button</div>
    </Draggable>
  );
};

export default CanvasComponentButton;
