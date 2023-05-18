import { useState } from "react";
import "./styles.css";

export default function App() {
  const temp = ["ram", "sham", "raam", "rastogi", "sita", "shalu", "shani"];
  const [inputext, setInputext] = useState(" ");
  const [filterList, setFilterList] = useState(temp);

  const call = (e) => {
    if (e.target.value === "") {
      setFilterList(temp);
      return;
    }

    const filterItem = temp.filter(
      (item) => item.indexOf(e.target.value) !== -1
    );
    setFilterList(filterItem);
    setInputext(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <input type="text" onChange={call} input={inputext} />
      <ul>{filterList && filterList.map((e) => <div>{e}</div>)}</ul>
    </div>
  );
}
