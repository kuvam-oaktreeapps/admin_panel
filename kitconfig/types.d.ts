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
  datatype?: "String" | "Number" | "Boolean";
  widget?:
    | "InputText"
    | "InputTextarea"
    | "RadioButton"
    | "Dropdown"
    | "InputSwitch"
    | "InputNumber"
    | "ImageFileUpload";
};

export type Resource = {
  name: string;
  url: string;
  collectionName: string;
  crudFields: CrudField[];
};
