import Input from "../../../Base/Forms/input";
import { FiSend } from "react-icons/fi";

interface IChatSenderProps extends React.PropsWithChildren {}

const ChatSender: React.FunctionComponent<IChatSenderProps> = (
  props
): JSX.Element => {
  return (
    <div className="p-3 flex">
      <div className="p-2 rounded-full cursor-pointer flex justify-center items-center hover:text-blue-400 ease-in duration-150">
        <FiSend fontSize={22}/>
      </div>
      <Input placeholder="پیام خود را بنویسید ..." />
    </div>
  );
};

export default ChatSender;
