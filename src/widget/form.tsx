import { FC, useState } from "react";
import { Select } from "../lib/select";
import { IValue } from "../lib/types";

interface IFormProps {
  isRandom: boolean;
  fetchData: (values: IValue) => Promise<void>;
}

export const Form: FC<IFormProps> = ({ isRandom, fetchData }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string>("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetchData({
      query: inputValue || "random",
      type: selectValue || "trivia",
    });
    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      {!isRandom && (
        <input
          required
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}
      <Select isRandom={isRandom} setValue={setSelectValue} />
      <button type="submit">{isRandom ? "Submit randomly" : "Submit"}</button>
    </form>
  );
};
