/**
 * @typedef {import('../types').Screen} Screen
 */
const screen = {
  name: "Students",
  url: "/students",
  collectionName: "students",
  crudFields: [
    { name: "fullName", widget: "InputText" },
    { name: "bio", widget: "InputTextarea", required: false },
    { name: "password", widget: "InputText", tableDisplay: false },
    { name: "rollNo", widget: "InputNumber", inline: true, unique: true },
    {
      name: "city",
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
    { name: "isPublic", widget: "InputSwitch" },
    {
      name: "gender",
      widget: "RadioButton",
      options: [
        { name: "Male", value: "M" },
        { name: "Female", value: "F" },
        { name: "Other", value: "O" },
      ],
    },
  ],
};

module.exports = screen;
