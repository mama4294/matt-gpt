"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

// whitelist localhost:3000 and domain name at https://console.cloud.google.com/apis/credentials?project=mattgpt-498f2

function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://links.papareact.com/2i6"
        alt="Logo"
        width={300}
        height={300}
      />
      <button
        className="text-white font-bold text-3xl animate-pulse"
        onClick={() => signIn("google")}
      >
        Sign in to use MattGPT
      </button>
    </div>
  );
}

export default Login;
