import PromptCard from "./PromptCard";

const Profile = ({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
}: {
  name: string;
  desc: string;
  data: any[];
  handleEdit: (post: any) => void;
  handleDelete: (post: any) => void;
}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">{name} Profile</h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout flex justify-center">
        {data.map((post) => {
          return (
            <PromptCard
              key={post._id}
              post={post}
              handleTagClick={() => {
                console.log("");
              }}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Profile;
