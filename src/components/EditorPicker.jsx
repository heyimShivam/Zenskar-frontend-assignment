import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faPlay, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ComponentListItems } from "../data/ComponentListItems";

import "./EditorPicker.css";
import { useState } from "react";

const EditorComponentsPicker = (props) => {
  const [searchBarInput, setSearchBarInput] = useState("");
  const [filteredComponentListItems, setFilteredComponentListItems] = useState(ComponentListItems);

  function selectComponent(componentId) {
    console.log(componentId);
  }

  function searchbarValueUpdated(event) {
    const eventValue = event.target.value;
    setSearchBarInput(eventValue);
    
    if(eventValue === "") {
      setFilteredComponentListItems(ComponentListItems);
      return;
    }

    setFilteredComponentListItems(ComponentListItems.filter(ComponentListItem => {
      if((ComponentListItem.name.toLowerCase()).includes(eventValue.toLowerCase())) {
        return true;
      }
      return false;
    }));
  }

  return (
    <>
      <div className="editor-picker-components-searchBar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder="Search Components" value={searchBarInput} onChange={searchbarValueUpdated}/>
      </div>

      <div className="editor-picker-components">
        <p className="editor-picker-components-title">Components</p>
        <div className="editor-picker-components-list">
          {filteredComponentListItems.map((ComponentListItem) => {
            return (
              <div className="editor-picker-component-item" key={ComponentListItem.id} onClick={() => {selectComponent(ComponentListItem.id)}}>
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
