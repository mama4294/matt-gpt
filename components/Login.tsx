"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import headshot from "../public/Headshot.jpg";

// whitelist localhost:3000 and domain name at https://console.cloud.google.com/apis/credentials?project=mattgpt-498f2

function Login() {
  return (
    <div className="bg-gradient-to-r from-[#11A37F] to-[#0A614C] h-screen flex flex-col items-center justify-center text-center text-white">
      {/* <Image
        // src="https://links.papareact.com/2i6"
        src={headshot}
        className="rounded-full"
        alt="Logo"
        width={300}
        height={300}
      /> */}
      <h1 className="font-bold text-4xl mb-2">MattGPT</h1>
      <p className="text-lg mb-10">
        A natural language processing tool driven by AI technology{" "}
      </p>
      <button
        className="text-2xl border border-white rounded-full p-4 hover:bg-white hover:text-[#11A37F]"
        onClick={() => signIn("google")}
      >
        Sign in
      </button>
    </div>
  );
}

export default Login;
