import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faPlay, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { ComponentListItems } from "./ComponentListItems";

import "./EditorPicker.css";

const EditorComponentsPicker = (props) => {
  return (
    <>
      <div className="editor-picker-components-searchBar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder="Search Components" />
      </div>

      <div className="editor-picker-components">
        <p className="editor-picker-components-title">Components</p>
        <div className="editor-picker-components-list">
          {ComponentListItems.map((ComponentListItem) => {
            return (
              <div className="editor-picker-component-item" key={ComponentListItem.id}>
                <div className="image">
                  <img
                    src={ComponentListItem.image}
                    alt={ComponentListItem.name}
                  />
                </div>
                <div className="text">
                  <h3>{ComponentListItem.name}</h3>
                  <p>{ComponentListItem.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const EditorPicker = (props) => {
  return (
    <div className="editor-picker">
      <div className="editor-picker-preview-zoom">
        <span>
          81.2%
          <span style={{ paddingLeft: "6px" }}>
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </span>
        <button className="preview-btn">
          <FontAwesomeIcon icon={faPlay} />
          <span style={{ paddingLeft: "6px" }}>Preview</span>
        </button>
      </div>

      <div className="editor-picker-components-tab">
        <EditorComponentsPicker />
      </div>
    </div>
  );
};

export default EditorPicker;
