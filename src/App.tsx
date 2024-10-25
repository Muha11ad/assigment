import { useState } from "react";
import { IValue } from "./lib/types";
import { Form } from "./widget/form";
import { fetchFact } from "./lib/api";

export function App() {
  const [data, setData] = useState<string>(
    "Choose one of them and here data will be displayed"
  );

  async function fetchData(values: IValue) {
    try {
      const result = await fetchFact(values.type, values.query);
      setData(result?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData("Error fetching data");
    }
  }

  return (
    <div className="container">
      <Form isRandom={false} fetchData={fetchData} />
      <p>{data}</p>
      <Form isRandom={true} fetchData={fetchData} />
    </div>
  );
}
