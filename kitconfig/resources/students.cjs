/**
 * @typedef {import('../types').Screen} Screen
 */
const screen = {
  name: "Students",
  url: "/students",
  collectionName: "students",
  crudFields: [
    { name: "fullName", type: "InputText" },
    { name: "bio", type: "InputTextarea", required: false },
    { name: "password", type: "InputText", tableDisplay: false },
    { name: "rollNo", type: "InputNumber", inline: true, unique: true },
    {
      name: "city",
      type: "Dropdown",
      inline: true,
      options: [
        { name: "New York", value: "NY" },
        { name: "Rome", value: "RM" },
        { name: "London", value: "LDN" },
        { name: "Istanbul", value: "IST" },
        { name: "Paris", value: "PRS" },
      ],
    },
    { name: "isPublic", type: "InputSwitch" },
    {
      name: "gender",
      type: "RadioButton",
      options: [
        { name: "Male", value: "M" },
        { name: "Female", value: "F" },
        { name: "Other", value: "O" },
      ],
    },
  ],
};

module.exports = screen;
