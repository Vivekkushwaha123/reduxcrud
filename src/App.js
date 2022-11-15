import { Heading, Form, Table } from "./components/index";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  return (
    <div className="App">
      <Heading title="Employee Data" />
      <Form data={data} setData={setData} />
      <Table data={data} setData={setData} />
    </div>
  );
}

export default App;
