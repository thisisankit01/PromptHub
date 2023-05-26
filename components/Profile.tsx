import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">{name} Profile</h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout flex justify-center">
        {data.map((posts) => {
          return (
            <PromptCard
              key={posts?._id}
              post={posts}
              handleEdit={() => handleEdit && handleEdit(posts)}
              handleDelete={() => handleDelete && handleDelete(posts)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Profile;
