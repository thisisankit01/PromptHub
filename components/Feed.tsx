"use client";

import {
  ChangeEventHandler,
  DetailedHTMLProps,
  FormEvent,
  HTMLAttributes,
  useState,
} from "react";
import PromptCard from "./PromptCard";
import { useEffect } from "react";

// interface PromptCardListTypes {
//   data: Array<String>;
//   handleTagClick: DetailedHTMLProps<
//     HTMLAttributes<HTMLDivElement>,
//     HTMLDivElement
//   >;
// }
interface PromptCardProps {
  data: Array<String>;
  post: Array<String>;
  handleTagClick: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
}

const PromptCardList = ({ data, post, handleTagClick }: PromptCardProps) => {
  return (
    <div className="mt-16 prompt_layout flex justify-center">
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
  const [searchText, setSearchText] = useState<string>("");
  const [posts, setPosts] = useState<Array<string>>([]);

  const handleSearchChange = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setSearchText()
  };

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };

    console.log(posts);

    fetchPost();
  }, []);

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
      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
