"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [posts, setPosts] = useState<Array<string>>([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`api/users/${session?.user?.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    if (session?.user?.id) fetchPost();
  }, [session?.user?.id]);

  const handleEdit = async (post: any) => {
    console.log(post);
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async () => {
    console.warn("are you sure to delete the Prompt ?");
  };

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
