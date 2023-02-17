"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../firebase";
import { Message } from "../typeings";

function ChatInput({ chatId }: { chatId: string }) {
  const { data: session } = useSession();
  const [input, setInput] = useState("");

  //use SWR to get model
  const model = "text-davinci-003";

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    const prompt = input.trim(); //remove whitespaces

    //Create message object
    const message: Message = {
      text: prompt,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    //clear input form
    setInput("");

    //adds message object to user - chats[chatId] - messages in firestore database
    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    //start loading message
    const notification = toast.loading("MattGPT is thinking...");

    //send message to mattgpt
    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
        chatId,
        model,
        session,
      }),
    })
      .then(() => {
        //successs message
        toast.success("MattGPT has responded!", {
          id: notification,
        });
      })
      .catch((error) => {
        //error message
        console.log("MattGPT has failed to respond!");
      });
  };

  return (
    <div className="bg-gray-700/50 text-gray-400 text-sm rounded-lg ">
      <form className="p-5 space-x-5 flex" onSubmit={sendMessage}>
        <input
          className="focus:outline-none bg-transparent flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
          type="text"
          disabled={!session}
          placeholder="type your message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          disabled={!session || !input}
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold py-2 px-4 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
