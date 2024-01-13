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
          <tr>
            {properties.tableHeading.map((value) => {
              return <th>{value}</th>;
            })}
          </tr>
          {properties.tableRow.map((value) => {
            return (
              <tr>
                {value.map((td) => {
                  return <td>{td}</td>;
                })}
              </tr>
            );
          })}
        </table>
      </div>
    </Draggable>
  );
};

export default CanvasComponentTable;
