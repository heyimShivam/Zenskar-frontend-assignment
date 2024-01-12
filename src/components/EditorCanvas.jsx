import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import EditorCanvasBoard from "./EditorCanvasBoard";

import "./EditorCanvas.css";

const EditorCanvas = (props) => {
  return (
    <div className="editor-canvas">
      <div className="editor-canvas-nav">
        <FontAwesomeIcon icon={faBars} />
        <span className="editor-canvas-nav-title">
          Design Board
          <span className="editor-canvas-nav-draft-text">(Draft)</span>
        </span>
      </div>
      <div className="editor-canvas-container">
        <EditorCanvasBoard />
      </div>
    </div>
  );
};

export default EditorCanvas;
