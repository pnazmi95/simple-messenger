import MessengerLayout from "./Layout"

interface IMessengerProps extends React.PropsWithChildren{}

const Messenger:React.FunctionComponent<IMessengerProps> = (props):JSX.Element => {
  return (
    <MessengerLayout>
        <h1>messengerLay</h1>
    </MessengerLayout>
  )
}

export default Messenger