"use client";

import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { collection, orderBy, query } from "firebase/firestore";
import ChatRow from "./ChatRow";
import Loading from "./Loading";
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

function Sidebar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "desc")
      )
  );

  const [signoutLoading, setSignoutLoading] = useState(false);

  const Signout = () => {
    signOut();
    setSignoutLoading(true);
  };

  return (
    <div className="h-full flex flex-col">
      {/* New Chat Button */}
      <NewChat>
        <div className="border-gray-700 border chatRow m-2">
          <PlusIcon className="h-4 w-4" />
          <p>New Chat</p>
        </div>
      </NewChat>

      {loading && (
        <div className="animate-pulse text-center text-white mt-2">
          <Loading />
          <p>Loading chat history</p>
        </div>
      )}

      {/* Chat history */}
      <div className="overflow-y-auto border-b border-white/20 flex-1">
        <div className="flex flex-col gap-2 text-gray-100 text-sm">
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>

      {/* Logout Button */}
      {session && (
        <div
          onClick={Signout}
          className={`chatRow justify-start mb-2 text-xs m-0`}
        >
          <img
            src={session.user?.image!}
            alt="Profile Picture"
            className="rounded-full h-12 w-12 cursor-auto "
          />
          {signoutLoading ? <Loading /> : <p>Logout</p>}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
