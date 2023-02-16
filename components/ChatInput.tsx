"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { useState } from "react";

function ChatInput({ chatId }: { chatId: string }) {
  const { data: session } = useSession();
  const [input, setInput] = useState("");
  return (
    <div className="bg-gray-700/50 text-gray-400 text-sm rounded-lg ">
      <form className="p-5 space-x-5 flex">
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
