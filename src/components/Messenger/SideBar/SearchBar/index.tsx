import Input from "../../../Base/Forms/input"

interface ISearchBarProps extends React.PropsWithChildren{}

const SearchBar:React.FunctionComponent<ISearchBarProps> = (props):JSX.Element => {
  return (
    <div className="p-2 border-[2px] border-r-gray-100">
      <Input placeholder="جست و جو ..."/>
    </div>
  )
}

export default SearchBar