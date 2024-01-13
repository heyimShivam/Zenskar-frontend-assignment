import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPlay,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { ComponentListItems } from "../data/ComponentListItems";
import {
  table,
  button,
  dropdown,
  textInput,
} from "../data/canvasBoardComponentDefaultData";
import { addComponent } from "../data/canvasComponentSlice";
import { updateZoom } from "../data/canvasZoomSlice";

import "./EditorPicker.css";

const EditorComponentsPicker = (props) => {
  const [searchBarInput, setSearchBarInput] = useState("");
  const [filteredComponentListItems, setFilteredComponentListItems] =
    useState(ComponentListItems);
  const dispatch = useDispatch();

  function selectComponent(componentId) {
    if (componentId === "textInput") {
      dispatch(addComponent(textInput));
    } else if (componentId === "button") {
      dispatch(addComponent(button));
    } else if (componentId === "dropdown") {
      dispatch(addComponent(dropdown));
    } else if (componentId === "table") {
      dispatch(addComponent(table));
    }
  }

  function searchbarValueUpdated(event) {
    const eventValue = event.target.value;
    setSearchBarInput(eventValue);

    if (eventValue === "") {
      setFilteredComponentListItems(ComponentListItems);
      return;
    }

    setFilteredComponentListItems(
      ComponentListItems.filter((ComponentListItem) => {
        if (
          ComponentListItem.name
            .toLowerCase()
            .includes(eventValue.toLowerCase())
        ) {
          return true;
        }
        return false;
      })
    );
  }

  return (
    <>
      <div className="editor-picker-components-searchBar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          type="text"
          placeholder="Search Components"
          value={searchBarInput}
          onChange={searchbarValueUpdated}
        />
      </div>

      <div className="editor-picker-components">
        <p className="editor-picker-components-title">Components</p>
        <div className="editor-picker-components-list">
          {filteredComponentListItems.map((ComponentListItem) => {
            return (
              <div
                className="editor-picker-component-item"
                key={ComponentListItem.id}
                onClick={() => {
                  selectComponent(ComponentListItem.id);
                }}
              >
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
  const zoomScale = useSelector((store) => store.canvasZoom.zoom);
  const dispatch = useDispatch();
  const [toggleZoomSlider, setToggleZoomSlider] = useState(false);
  const [zoomSliderPercentage, setZoomSliderPercentage] = useState(
    ((zoomScale / 3) * 100).toFixed(2)
  );

  function updateCanvasZoom(event) {
    setZoomSliderPercentage(event.target.value);
    dispatch(updateZoom((event.target.value / 100) * 3));
  }

  return (
    <div className="editor-picker">
      <div className="editor-picker-preview-zoom">
        <span style={{ position: "relative" }}>
          {zoomSliderPercentage}%
          <span
            style={{ paddingLeft: "6px" }}
            onClick={() => {
              setToggleZoomSlider(!toggleZoomSlider);
            }}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
          {toggleZoomSlider && (
            <div className="volume-control">
              <input
                className="volume"
                type="range"
                value={zoomSliderPercentage}
                max="100"
                onChange={updateCanvasZoom}
              />
            </div>
          )}
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
