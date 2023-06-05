/**
 * @type {import('../types').Resource}
 */
const resource = {
  name: "Students",
  url: "/students",
  collectionName: "students",
  crudFields: [
    { name: "fullName", datatype: "String", widget: "InputText" },
    { name: "bio", datatype: "String", widget: "InputTextarea", required: false },
    { name: "password", datatype: "String", widget: "InputText", tableDisplay: false },
    { name: "rollNo", datatype: "Number", widget: "InputNumber", inline: true, unique: true },
    {
      name: "city",
      datatype: "String",
      widget: "Dropdown",
      inline: true,
      options: [
        { name: "New York", value: "NY" },
        { name: "Rome", value: "RM" },
        { name: "London", value: "LDN" },
        { name: "Istanbul", value: "IST" },
        { name: "Paris", value: "PRS" },
      ],
    },
    { name: "isPublic", widget: "InputSwitch", datatype: "Boolean" },
    {
      name: "gender",
      datatype: "String",
      widget: "RadioButton",
      options: [
        { name: "Male", value: "M" },
        { name: "Female", value: "F" },
        { name: "Other", value: "O" },
      ],
    },
  ],
};

module.exports = resource;
