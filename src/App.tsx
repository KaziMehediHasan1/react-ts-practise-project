import React, { useState } from "react";
import { setTitleFunc } from "./utils/savedTiitle";
export type TitleType = {
  id: string;
  isCompleted: boolean;
  title: string;
};

const App = () => {
  const [title, setTitle] = useState<TitleType[]>([]);
  const [newTitle, setNewTitle] = useState("");

  //**  submit handler start **//
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const newObjTitle: TitleType = {
      id: Math.random().toString(),
      isCompleted: true,
      title: newTitle,
    };
    setTitle((prev) => [...prev, newObjTitle]);
    setNewTitle("");
    // setTitleFunc([...title, newObjTitle]);
  };

  //**  submit handler end **//

  //** delete handler start **/
  const deleteHandler = (id: string): void => {
    setTitle((prev) => prev.filter((t) => t.id !== id));
  };
  //** delete handler end **/

  // edit handler //
  const editHandler = (id: string) => {
    console.log(id);
    const updatePrompt = prompt("edit here");
    if (updatePrompt) {
      setTitle((prev: TitleType[]) =>
        prev.map((t) => {
          return t.id === id ? { ...t, title: updatePrompt } : t;
        })
      );
    }
  };

  return (
    <div>
      <nav id="header">React-TS Todo</nav>

      {title.map((t) => {
        return (
          <div key={t.id} className="showDiv">
            <p>{t.title}</p>
            <section className="btnContainer">
              <button onClick={() => editHandler(t.id)} id="edit">
                Edit
              </button>
              <button onClick={() => deleteHandler(t.id)} id="delete">
                Delete
              </button>
            </section>
          </div>
        );
      })}

      <form onSubmit={submitHandler} id="addDiv">
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          type="text"
          value={newTitle}
          placeholder="Enter Title"
          className="title"
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default App;
