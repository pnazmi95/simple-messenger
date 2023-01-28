import background from "../../../../assets/images/chat-light-background.jpg";
import MessageItem from "./MessageItem";

interface IChatMessageProps extends React.PropsWithChildren {}

const ChatMessage: React.FunctionComponent<IChatMessageProps> = (
  props
): JSX.Element => {
  return (
    <ul
      className="w-[99%] h-[calc(100%-3.5rem)] rounded-md my-1 flex flex-col [&_li]:my-5 p-10 overflow-y-auto scrollbar-hide"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center center`,
        backgroundSize: `cover`,
      }}
    >
      <MessageItem type="sender"/>
      <MessageItem type="receiver"/>
      <MessageItem type="sender"/>
      <MessageItem type="sender"/>
      <MessageItem type="receiver"/>

    </ul>
  );
};

export default ChatMessage;
