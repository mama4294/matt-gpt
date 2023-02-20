"use client";

import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Loading from "./Loading";

// whitelist localhost:3000 and domain name at https://console.cloud.google.com/apis/credentials?project=mattgpt-498f2

function Login() {
  const [loading, setLoading] = useState(false);

  const login = () => {
    signIn("google");
    setLoading(true);
  };
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
      <p className="text-lg mb-10 px-4">
        A natural language processing tool driven by AI technology{" "}
      </p>
      <button
        className="text-2xl border border-white rounded-full p-4 hover:bg-white hover:text-[#11A37F]"
        onClick={login}
        disabled={loading}
      >
        {loading ? <Loading /> : "Sign in"}
      </button>
    </div>
  );
}

export default Login;
