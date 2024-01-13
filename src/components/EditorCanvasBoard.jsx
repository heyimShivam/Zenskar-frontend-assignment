import { useSelector } from "react-redux";

import CanvasComponentTextEditor from "./CanvasComponent/CanvasComponentTextEditor";
import CanvasComponentButton from "./CanvasComponent/CanvasComponentButton";
import CanvasComponentTable from "./CanvasComponent/CanvasComponentTable";
import CanvasComponentDropDown from "./CanvasComponent/CanvasComponentDropDown";

import "./EditorCanvasBoard.css";

const EditorCanvasBoard = (props) => {
  const zoomScale = useSelector((store) => store.canvasZoom.zoom);
  const showDotsBackground = useSelector(
    (store) => store.canvasBackground.showDotsBackground
  );
  const canvasBoardComponentData = useSelector(
    (store) => store.canvasComponentsList.components
  );

  return (
    <>
      <div className="main-container">
        {canvasBoardComponentData.length === 0 && (
          <p className="editor-canvas-center-text">
            Drag & drop components here.
          </p>
        )}
        <div
          className="editor-canvas-foreground"
          style={
            showDotsBackground
              ? {
                  padding: "10px",
                  zoom: zoomScale,
                  backgroundImage:
                    "radial-gradient(black 1px, transparent 1px)",
                }
              : { padding: "10px", zoom: zoomScale }
          }
        >
          {canvasBoardComponentData.map((value, index) => {
            if (value.id === "textInput") {
              return (
                <CanvasComponentTextEditor
                  key={index}
                  properties={value}
                  componentIndex={index}
                />
              );
            } else if (value.id === "button") {
              return (
                <CanvasComponentButton
                  key={index}
                  properties={value}
                  componentIndex={index}
                />
              );
            } else if (value.id === "dropdown") {
              return (
                <CanvasComponentDropDown
                  key={index}
                  properties={value}
                  componentIndex={index}
                />
              );
            } else if (value.id === "table") {
              return (
                <CanvasComponentTable
                  key={index}
                  properties={value}
                  componentIndex={index}
                />
              );
            }
            return <></>;
          })}
        </div>
      </div>
    </>
  );
};

export default EditorCanvasBoard;
