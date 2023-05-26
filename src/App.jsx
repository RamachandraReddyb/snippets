import React, { useState } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar";
import Accordian from "./components/Accordian";
import snippets from "./components";

const App = () => {
  const [data, setData] = useState(snippets);
  const [q, setQ] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    setQ(e.target.value);
    if (e.target.value) {
      setData(
        snippets.filter((el) =>
          el.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setData(snippets);
    }
  };

  return (
    <main>
      <div className="main">
        <div className="container">
          <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
            <div className="flex flex-col items-center">
              <h2 className="font-bold text-5xl mt-5 tracking-tight">
                Code Snippets
              </h2>
              <p className="text-neutral-500 text-xl mt-3">
                Useful codes, reminders
              </p>
            </div>

            <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
              <SearchBar q={q} setQ={setQ} handelSubmit={handelSubmit} />
              {data &&
                data.map((snippet, index) => {
                  return (
                    <Accordian
                      key={"main" + index}
                      snippet={snippet}
                      index={index}
                      q={q}
                    />
                  );
                })}
              {!data.length && q.length > 0 && (
                <p className="text-neutral-500 text-xl mt-3 text-center">
                  No results found, try different search keys
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
