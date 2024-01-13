export const textInput = {
  id: "textInput",
  name: "Text Input",
  dragableDefaultPosition: { x: 0, y: 0 },
  dragablePosition: null,
  dragableGrid: [25, 25],
  value: "Text Input",
};

export const button = {
  id: "button",
  name: "Button",
  dragableDefaultPosition: { x: 0, y: 0 },
  dragablePosition: null,
  dragableGrid: [25, 25],
  value: "Button",
  url: "#",
};

export const dropdown = {
  id: "dropdown",
  name: "Dropdown",
  dragableDefaultPosition: { x: 0, y: 0 },
  dragablePosition: null,
  dragableGrid: [25, 25],
  value: 0,
  options: [
    { text: "Select car:", value: 0 },
    { text: "Audi", value: 1 },
    { text: "BMW", value: 2 },
    { text: "Citroen", value: 3 },
    { text: "Ford", value: 4 },
    { text: "Honda", value: 5 },
    { text: "Jaguar", value: 6 },
    { text: "Land", value: 7 },
    { text: "Mercedes", value: 8 },
    { text: "Mini", value: 9 },
    { text: "Nissan", value: 10 },
    { text: "Toyota", value: 11 },
    { text: "Volvo", value: 12 },
  ],
};

export const table = {
  id: "table",
  name: "Table",
  dragableDefaultPosition: { x: 0, y: 0 },
  dragablePosition: null,
  dragableGrid: [25, 25],
  tableHeading: ["Company", "Contact", "Country"],
  tableRow: [
    ["Alfreds Futterkiste", "Maria Anders", "Germany"],
    ["Centro comercial Moctezuma", "Francisco Chang", "Mexico"],
    ["Ernst Handel", "Roland Mendel", "Austria"],
  ],
};
