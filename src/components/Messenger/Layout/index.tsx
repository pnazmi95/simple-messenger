import ChatList from "../SideBar/ChatList";
import SearchBar from "../SideBar/SearchBar";

interface IMessengerLayoutProps extends React.PropsWithChildren {}

const MessengerLayout: React.FunctionComponent<IMessengerLayoutProps> = ({
  children,
}): JSX.Element => {
  return (
    <div className="flex bg-white h-full rounded-lg p-3">
      {/* MainBar */}
      <div className="flex-1">Main</div>
      {/* SideBar */}
      <div className="flex-[0_0_20rem] flex-col">
        <SearchBar />
        <div className="flex flex-col overflow-y-auto scrollbar-hide h-[calc(100%-3.5rem)]">
          <ChatList />
        </div>
      </div>
    </div>
  );
};

export default MessengerLayout;
