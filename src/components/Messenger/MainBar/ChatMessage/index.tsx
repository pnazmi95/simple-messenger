interface IChatMessageProps extends React.PropsWithChildren {}

const ChatMessage:React.FunctionComponent<IChatMessageProps> = (props):JSX.Element => {
  return (
    <h2>ChatMessage</h2>
  )
}

export default ChatMessage