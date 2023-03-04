"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Loading from "./Loading";

// whitelist localhost:3000 and domain name at https://console.cloud.google.com/apis/credentials?project=mattgpt-498f2

function Login() {
  const [loading, setLoading] = useState(false);
  const currentYear = new Date().getFullYear();

  const login = () => {
    signIn("google");
    setLoading(true);
  };
  return (
    <div className="h-screen flex flex-col">
      <section className="gradient-htmlForm h-full bg-neutral-200 dark:bg-neutral-700">
        <div className="container h-full p-6 md:p-10 m-auto">
          <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="p-6 md:mx-6 md:p-12">
                      <div className="text-center">
                        <img
                          className="mx-auto w-24 md:w-48 rounded-md"
                          src="https://links.papareact.com/2i6"
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-4 md:mb-12 pb-1 text-xl font-semibold">
                          MattGPT
                        </h4>
                      </div>
                      <div>
                        {/* <p className="mb-4">Please sign in to your account</p> */}
                        <button
                          className=" bg-gradient-to-r from-[#11A37F] to-[#0A614C] mb-3 inline-block w-full h-12 rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          onClick={login}
                          disabled={loading}
                        >
                          {loading ? <Loading /> : "Start"}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-gradient-to-r from-[#11A37F] to-[#0A614C]">
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        Artifical Intelligence
                      </h4>
                      <p className="text-sm">
                        MattGPT is an intuitive Text-To-Speech AI powered by a
                        language processing engine. It is designed to be a handy
                        assistant for conversational activities. MattGPT is
                        capable of understanding natural language queries, and
                        can answer questions, provide information, and help with
                        tasks. It can be used to generate story ideas and
                        conversations, making it perfect for creative writing
                        and brainstorming.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer flex h-16 w-full items-center justify-between bg-gradient-to-r from-[#11A37F] to-[#0A614C] text-white px-4 text-xs sm:text-sm">
        <div>Matthew Malone</div>
        <div className="flex flex-col sm:flex-row">
          <p className="pr-2">Copyright © {currentYear}</p>
          <p>All right reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Login;
