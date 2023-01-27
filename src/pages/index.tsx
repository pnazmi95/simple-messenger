import React from "react";
import Messenger from "../components/Messenger";

interface IHomePageProps extends React.PropsWithChildren {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props): JSX.Element => {
  return (
    <Messenger />
  );
};

export default HomePage;
