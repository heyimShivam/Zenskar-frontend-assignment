import Draggable from "react-draggable";

import "./CanvasComponentDropDown.css";

const CanvasComponentDropDown = (props) => {
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
      <div className="canvas-drag-dropdown">
        <select>
          <option value="0">Select car:</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
          <option value="3">Citroen</option>
          <option value="4">Ford</option>
          <option value="5">Honda</option>
          <option value="6">Jaguar</option>
          <option value="7">Land Rover</option>
          <option value="8">Mercedes</option>
          <option value="9">Mini</option>
          <option value="10">Nissan</option>
          <option value="11">Toyota</option>
          <option value="12">Volvo</option>
        </select>
      </div>
    </Draggable>
  );
};

export default CanvasComponentDropDown;
