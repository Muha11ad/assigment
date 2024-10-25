export interface IValue {
  type: string;
  query: string | number;
}

export type ISetValue = React.Dispatch<React.SetStateAction<string>>;
