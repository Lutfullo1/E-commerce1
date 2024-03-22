import React from "react";

export const Search = ({ input, setInput }) => {
  return (
    <div>
      <div>
        <input
          className="w-[673px] border p-4 py-3 outline-none"
          type="text"
          placeholder="Поиск"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
    </div>
  );
};
