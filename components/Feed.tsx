"use client";

import { ChangeEventHandler, FormEvent, useState } from "react";

import PromptCard from "./PromptCard";

const Feed = () => {
  const [searchText, setSearchText] = useState<string>("");

  const handleSearchChange = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setSearchText()
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={() => handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
    </section>
  );
};

export default Feed;
