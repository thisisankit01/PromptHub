import Link from "next/link";

const Form = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
}: HTMLFormElement) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 w-full glassmorphism">
        <div className="sm:grid sm:grid-flow-col gap-4">
          <label className="row-span-3">
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Prompt Description
            </span>

            <textarea
              value={post.description}
              onChange={(e) =>
                setPost({ ...post, description: e.target.value })
              }
              placeholder="Write description for your prompt here..."
              required
              className="form_textarea form_description"
            />
          </label>

          <label className="col-span-2">
            <div className="max-sm:pt-5">
              <span className="font-satoshi font-semibold text-base text-gray-700 ">
                Your AI Prompt
              </span>

              <textarea
                value={post.prompt}
                onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                placeholder="Write your prompt here..."
                required
                className="form_textarea"
              />
            </div>
          </label>

          <label className="row-span-2 col-span-2">
            <div className="max-sm:pt-5">
              <span className="font-satoshi font-semibold text-base text-gray-700">
                Tag&nbsp;
                <span className="font-normal">
                  (#product, #webdevelopment, #idea)
                </span>
              </span>

              <textarea
                value={post.tag}
                onChange={(e) => setPost({ ...post, tag: e.target.value })}
                placeholder="#tag"
                required
                className="form_input"
              />
            </div>
          </label>
        </div>
        <div className="flex-end mx-3 mb-5 gap-4 pt-8">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
