import Draggable from "react-draggable";

import "./CanvasComponentTable.css";

const CanvasComponentTable = (props) => {
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
      // handle="strong"
    >
      <div className="canvas-table">
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
        </table>
      </div>
    </Draggable>
  );
};

export default CanvasComponentTable;
