import {
  SunIcon,
  ExclamationTriangleIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen px-2">
      <h1 className="text-5xl font-bold mb-20">MattGPT</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              Explain quantum physics to me like a 5th grader
            </p>
            <p className="infoText">
              What is the difference between their and there?
            </p>
            <p className="infoText">Why is Matthew Malone such a cool guy?</p>
          </div>
        </div>
        <div>
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
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              May occasionally generate incorrect information
            </p>
            <p className="infoText">
              Cannot read your significant other's mind
            </p>
            <p className="infoText">
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
