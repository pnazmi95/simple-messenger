import cs from "classnames";

interface IMessageItemProps extends React.PropsWithChildren {
  type: "sender" | "receiver";
}

const MessageItem: React.FunctionComponent<IMessageItemProps> = ({
  type = "sender",
}): JSX.Element => {
  switch (type) {
    case "sender":
      return (
        <li className="flex justify-start">
          <div className="rounded-full h-[3rem] w-[3rem] overflow-hidden">
            <img
              src={require("../../../../../assets/images/parsaPic.jpg")}
              alt="profile-pic"
            />
          </div>
          <div
            className={cs("p-2 w-[18rem] rounded-lg shadow-lg mr-2 bg-white")}
          >
            <h4 className="font-bold text-md">پارسا نظمی</h4>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              hic similique voluptate consequatur earum reprehenderit temporibus
              nobis accusantium excepturi nesciunt.
            </p>
          </div>
        </li>
      );
    case "receiver":
      return (
        <li className="flex justify-end">
          <div
            className={cs(
              "p-2 w-[18rem] rounded-lg shadow-lg ml-2 bg-green-500"
            )}
          >
            <h4 className="font-bold text-md">پارسا نظمی</h4>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              hic similique voluptate consequatur earum reprehenderit temporibus
              nobis accusantium excepturi nesciunt.
            </p>
          </div>
          <div className="rounded-full h-[3rem] w-[3rem] overflow-hidden">
            <img
              src={require("../../../../../assets/images/parsaPic.jpg")}
              alt="profile-pic"
            />
          </div>
        </li>
      );
  }
};

export default MessageItem;
