import { useState } from "react";

export default function App() {
  const [add, setAdd] = useState();
  const [minus, setMinus] = useState();

  const onSubmit = (e) => {
    e.peventDefault();
    const setAdd = (add) => {
      add = add + add;
      return;
      const setMinus = (minus) => {
        minus = minus - minus;
        return;
      };
    };
  };
  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input onSubmit={onSubmit} /> 만큼을{" "}
        <button type="number" setAdd={setAdd}>
          더할게요
        </button>{" "}
        <button type="number" setMinus={setMinus}>
          뺄게요
        </button>
        <button>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>0</p>
      </div>
    </div>
  );
}
