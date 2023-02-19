import openai from "./chatgpt";

//could use chatId to allow for contextual answers based on previous responses

const query = async (prompt: string, chatId: string, model: string) => {
  console.log("---querying API---");
  console.log("openai: ", openai);
  console.log("prompt: ", prompt);
  console.log("chatId: ", chatId);
  console.log("model: ", model);

  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `MattGPT was unable to find an answer to that due to: ${err.Message}`
    );
  return res;
};

export default query;
