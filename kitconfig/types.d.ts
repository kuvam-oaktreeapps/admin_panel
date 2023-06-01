export type CrudField = {
  name: string;
  required?: boolean;
  unique?: boolean;
  tableDisplay?: boolean;
  inline?: boolean;
  options?: {
    name: string;
    value: string;
  }[];
  type:
    | "InputText"
    | "InputTextarea"
    | "RadioButton"
    | "Dropdown"
    | "String"
    | "InputSwitch"
    | "Boolean"
    | "InputNumber"
    | "Number";
};

export type Screen = {
  name: string;
  url: string;
  collectionName: string;
  crudFields: CrudField[];
};
