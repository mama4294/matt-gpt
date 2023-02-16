"use client";

import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";

function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col p-2 h-screen">
      <div className="flex-1">
        <div>
          {/* New Chat Button */}
          <NewChat />
          <div>{/* Algorithm Selection */}</div>

          {/* Chat history */}
        </div>
      </div>
      {session && (
        <img
          src={session.user?.image!}
          onClick={() => signOut()}
          alt="Profile Picture"
          className="rounded-full h-12 w-12 cursor-auto mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
}

export default Sidebar;
