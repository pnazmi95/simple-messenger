import Input from "../../../Base/Forms/input"

interface ISearchBarProps extends React.PropsWithChildren{}

const SearchBar:React.FunctionComponent<ISearchBarProps> = (props):JSX.Element => {
  return (
    <div className="p-2">
      <Input />
    </div>
  )
}

export default SearchBar