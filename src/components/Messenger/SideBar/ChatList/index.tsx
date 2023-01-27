import ChatItem from "./ChatItem";

interface IChatListProps extends React.PropsWithChildren {}

const ChatList: React.FunctionComponent<IChatListProps> = (
  props
): JSX.Element => {
  return (
    <>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
    </>
  );
};

export default ChatList;
