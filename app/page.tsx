import {
  SunIcon,
  ExclamationTriangleIcon,
  BoltIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import NewChat from "../components/NewChat";

function HomePage() {
  return (
    <div className="h-full overflow-hidden">
      <div className="text-white flex flex-col items-center md:justify-center h-full px-2 overflow-y-auto overflow-x-hidden">
        <h1 className="text-5xl font-bold mt-20 mb-5">MattGPT</h1>
        <div className="mb-20">
          <NewChat>
            <div className="border-gray-500 border chatRow m-2">
              <PlusIcon className="h-4 w-4" />
              <p>Start Conversation</p>
            </div>
          </NewChat>
        </div>
        <div className="flex flex-col space-x-2 text-center md:flex-row">
          <div className="mb-8">
            <div className="flex flex-col items-center justify-center mb-5">
              <SunIcon className="h-8 w-8" />
              <h2>Examples</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">
                "Why is Matthew Malone such a cool guy?"
              </p>
              <p className="infoText">
                "Explain quantum computing in simple terms"
              </p>
              <p className="infoText">
                "How do I make an HTTP request in Javascript?"
              </p>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex flex-col items-center justify-center mb-5">
              <BoltIcon className="h-8 w-8" />
              <h2>Capabilities</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">
                Remembers what user said earlier in the conversation
              </p>
              <p className="infoText">
                Allows user to provide follow-up corrections
              </p>
              <p className="infoText">
                Trained to decline inappropriate requests
              </p>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex flex-col items-center justify-center mb-5">
              <ExclamationTriangleIcon className="h-8 w-8" />
              <h2>Limitations</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">
                Cannot read your significant other's mind
              </p>
              <p className="infoText">
                May occasionally generate incorrect information
              </p>
              <p className="infoText">
                Limited knowledge of world and events after 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
