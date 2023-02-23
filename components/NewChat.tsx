"use client";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useMenuContext } from "../context/MobileMenu";
import { db } from "../firebase";

function NewChat({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { data: session } = useSession();
  const { setMenuOpen } = useMenuContext();
  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );
    setMenuOpen(false);
    router.push(`/chat/${doc.id}`);
  };

  return <div onClick={createNewChat}>{children}</div>;
}

export default NewChat;
