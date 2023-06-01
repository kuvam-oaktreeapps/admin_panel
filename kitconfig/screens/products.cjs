/**
 * @type {import('../types').Screen}
 */
const screen = {
  name: "products",
  collectionName: "products",
  url: "/products",
  crudFields: [
    { name: "pid", type: "String", unique: true },
    { name: "name", type: "String" },
    { name: "price", type: "Number", tableDisplay: false },
    { name: "tagNo", type: "InputNumber", required: false },
  ],
};

module.exports = screen;
