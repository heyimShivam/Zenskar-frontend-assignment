import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./EditorCanvas.css";

const EditorCanvas = (props) => {
  return (
    <div className="editor-canvas">
      <div className="editor-canvas-nav">
        <FontAwesomeIcon icon={faBars} />
        <span class="editor-canvas-nav-title">
          Design Board <span class="editor-canvas-nav-draft-text">(Draft)</span>
        </span>
      </div>
      <div className="editor-canvas-container">
      </div>
    </div>
  );
};

export default EditorCanvas;
