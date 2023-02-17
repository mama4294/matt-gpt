import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  const isMattGPT = message.user.name === "MattGPT";

  return (
    <div className={`py-5 text-white ${isMattGPT && "bg-[#434654]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img
          src={message.user.avatar}
          alt="profile picture"
          className="h-8 w-8"
        />
        <p>{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
