"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import CustomForm from "@components/Form";
import { FormEvent } from "react";

const CreatePrompt = () => {
  const router = useRouter();

  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
    description: "",
  });

  const createPrompt = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user?.id,
          tag: post.tag,
          description: post.description,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  console.log("hi");

  return (
    <CustomForm
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
