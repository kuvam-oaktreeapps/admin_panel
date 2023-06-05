/**
 * @type {import('../types').Screen}
 */
const screen = {
  name: "products",
  collectionName: "products",
  url: "/products",
  crudFields: [
    { name: "pid", datatype: "String", unique: true },
    { name: "name", datatype: "String" },
    { name: "price", datatype: "Number", required: false },
  ],
};

module.exports = screen;
