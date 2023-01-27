interface IInputProps extends React.PropsWithChildren {}

const Input:React.FunctionComponent<IInputProps> = (props):JSX.Element => {
  return (
    <input type="text" className="bg-gray-300 
      p-1
      rounded-md
      w-full
      placeholder:p-2 placeholder:text-sm" placeholder="جست و جو"/>
  )
}

export default Input