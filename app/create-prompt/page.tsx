"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Form from "@components/Form";
import { FormEvent } from "react";

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: ... code here ...
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setSubmitting(true);
    await createPrompt(e);
    setSubmitting(false);
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreatePrompt;
