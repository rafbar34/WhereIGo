"use server";
import OpenAi from "openai";

const openai = new OpenAi({
  apiKey: process.env.OPEN_API_KEY,
});
export const generateChatResponse = async (chatMessages) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "you are helpful assistant" },
        ...chatMessages,
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });
    return response.choices[0].message;
  } catch (e) {
    console.log(e);
    return null;
  }
};
