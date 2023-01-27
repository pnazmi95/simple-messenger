interface IHeaderProps extends React.PropsWithChildren {}


const Header:React.FunctionComponent<IHeaderProps> = (props):JSX.Element => {
  return (
    <h2 className="self-start font-bold">
        پروژه تمرینی پیام رسان تلگرام
    </h2>
  )
}

export default Header