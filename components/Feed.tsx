"use client";

import { DetailedHTMLProps, FormEvent, HTMLAttributes, useState } from "react";
import PromptCard from "./PromptCard";
import { useEffect } from "react";

interface PromptCardProps {
  data: Array<any>; // Update the data prop to accept an array of any type
  post: any; // Update the post prop to accept any type
  handleTagClick: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
}

const PromptCardList = ({ data, handleTagClick }: PromptCardProps) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((posts) => {
        return (
          <PromptCard
            key={posts?._id}
            post={posts}
            handleTagClick={handleTagClick}
          />
        );
      })}
    </div>
  );
};

const Feed = () => {
  const [posts, setPosts] = useState<Array<string>>([]);

  //search states
  const [searchText, setSearchText] = useState<string>("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPost = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const filterPrompts = (searchText: any) => {
    const regex = new RegExp(searchText, "i"); //The RegExp object is used for matching text with a pattern ,  'i' flag for case-insensitive search
    return posts.filter((item) => {
      regex.test(item.creator.username) || //The test() method returns true if it finds a match, otherwise false.
        regex.test(item.tag) ||
        regex.test(item.prompt) ||
        regex.test(item.description);
    });
  };

  const handleSearchChange = (e: FormEvent<HTMLInputElement>) => {
    clearTimeout(searchTimeout);
    setSearchText(e.currentTarget.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName: any) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {/* All Prompts */}
      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
