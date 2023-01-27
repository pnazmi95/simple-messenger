interface IChatItemProps extends React.PropsWithChildren{}

const ChatItem:React.FunctionComponent<IChatItemProps> = (props):JSX.Element => {
  return (
    <div className="flex w-full cursor-pointer ease-in duration-200 hover:bg-blue-400 hover:rounded-md p-1">
      <div className="w-full">
        <div>
          <div className="flex justify-between items-center">
          <h6 className="text-sm font-semibold">7:15 عصر</h6>
          <h4 className="text-md font-bold ml-2">پارسا نظمی</h4>
          </div>
          <h5 className="text-xs mt-1">سلام پارسا خوبی؟ کجایی؟</h5>
        </div>
      </div>
      <div className="rounded-full h-[3rem] w-[3rem] overflow-hidden bg-black">
        <img src={require("../../../../../assets/images/parsaPic.jpg")} alt="profile-pic" />
      </div>
    </div>
  )
}

export default ChatItem