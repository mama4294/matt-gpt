"use client";

import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { collection, orderBy, query } from "firebase/firestore";
import ChatRow from "./ChatRow";

function Sidebar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "desc")
      )
  );

  return (
    <div className="flex flex-col p-2 h-screen">
      <div className="flex-1">
        <div>
          {/* New Chat Button */}
          <NewChat />
          <div>{/* Algorithm Selection */}</div>

          {loading && (
            <div className="animate-pulse text-center text-white">
              <p>Loading chat history</p>
            </div>
          )}

          {/* Chat history */}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <div
          onClick={() => signOut()}
          className={`chatRow flex justify-start mb-2`}
        >
          <img
            src={session.user?.image!}
            alt="Profile Picture"
            className="rounded-full h-12 w-12 cursor-auto "
          />
          <p>Logout</p>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
