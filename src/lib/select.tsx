import { FC } from "react";
import { ISetValue } from "./types";

interface ISelectProps {
  setValue: ISetValue;
  isRandom?: boolean;
}

export const Select: FC<ISelectProps> = ({ setValue, isRandom = false }) => {
  const SELECT_CONTENT = ["trivia", "year", "date", "math"];

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setValue(e.target?.value);
  }

  return (
    <select onChange={handleSelectChange}>
      {SELECT_CONTENT.map((value) => (
        <option key={value} value={value}>
          {isRandom ? `random/${value}` : value}
        </option>
      ))}
    </select>
  );
};
