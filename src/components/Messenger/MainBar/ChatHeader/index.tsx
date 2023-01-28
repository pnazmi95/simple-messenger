interface IChatHeaderProps extends React.PropsWithChildren {}

const ChatHeader: React.FunctionComponent<IChatHeaderProps> = (
  props
): JSX.Element => {
  return (
    <div className="p-1 flex flex-col py-1 pr-3">
      <h1 className="font-bold">گروه نهم بوت کمپ فرانت اند کوئرا</h1>
      <h1 className="text-xs">170 نفر‌، 38 نفر آنلاین</h1>
    </div>
  );
};

export default ChatHeader;
