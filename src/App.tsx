import React, { ChangeEvent, useState } from "react";

type StateType = {
  title: string[];
};

const App = () => {
  const [title, setTitle] = useState<StateType[]>([]);
  const [titles, setTitles] = useState<string>("");

  const submitHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    setTitle((prev) => [...prev, titles]);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <nav id="header">React-TS Todo</nav>
      <form onSubmit={submitHandler} id="addDiv">
        <input
          type="text"
          placeholder="Enter Title"
          className="title"
          onChange={handleChange}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default App;
