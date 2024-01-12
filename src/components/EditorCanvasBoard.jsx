import "./EditorCanvasBoard.css";

const CanvasBackgroundSquares = ({ index }) => {
  return (
    <div key={index} className="editor-canvas-background-squares">
      <div class="lefttop dot"></div>
      <div class="righttop dot"></div>
    </div>
  );
};

const EditorCanvasBoard = (props) => {
  return (
    <>
      <div className="main-container">
        <div className="editor-canvas-background" style={{padding: '10px'}}>
          {Array(1829)
            .fill(1)
            .map((_, index) => {
              return <CanvasBackgroundSquares index={index} />;
            })}
        </div>
        <p className="editor-canvas-center-text">Drag & drop components here.</p>
      </div>
    </>
  );
};

export default EditorCanvasBoard;
