import Draggable from "react-draggable";

import "./CanvasComponentTable.css";

const CanvasComponentTable = ({ properties }) => {
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
      // handle="strong"
    >
      <div className="canvas-table">
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
