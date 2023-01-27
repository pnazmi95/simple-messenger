import React from "react";

interface IHomePageProps extends React.PropsWithChildren {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props): JSX.Element => {
  return (
    <div>
        Home Page
    </div>
  );
};

export default HomePage;
