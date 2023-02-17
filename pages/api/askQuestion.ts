// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../lib/queryAPI";
import admin from "firebase-admin";
import { adminDb } from "../../firebaseAdmin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt" }); //error
    return;
  }
  if (!chatId) {
    res.status(400).json({ answer: "Please provide a chatId" }); //error
    return;
  }

  //ChatGPT query
  const response = await query(prompt, chatId, model);

  const message = {
    text: response || "MattGPT could not find an answer to that",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "MattGPT",
      name: "MattGPT",
      avatar: "https://links.papareact.com/89k",
    },
  };

  console.log("--- Ask Question Component ---");
  console.log("request", req.body);
  console.log("response", response);
  console.log("message", message);

  await adminDb
    .collection("users")
    .doc(session.user.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
