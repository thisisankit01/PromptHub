// GET for reading the data
// PATCH for updating the data for edit functions
//DELETE for deleting the data

import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request: Request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) return new Response("Prompt not found", { status: 404 });

    return new Response(JSON.stringify(prompt), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

export const PATCH = async (request: Request, { params }) => {
  try {
    await connectToDB();

    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt)
      JSON.stringify(existingPrompt),
        {
          status: 404,
        };

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    existingPrompt.description = description;

    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to update prompt", { status: 504 });
  }
};

export const DELETE = async (request: Request, { params }) => {
  try {
    await connectToDB();
    await Prompt.findByIdAndDelete(params.id);

    return new Response("Prompt Deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to Deleted Prompt", { status: 500 });
  }
};
