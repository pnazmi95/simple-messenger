interface IFooterProps extends React.PropsWithChildren {}

const Footer:React.FunctionComponent<IFooterProps> = (props):JSX.Element => {
  return (
    <h6 className="text-xs pt-2">
       © ( از تمرینات بوت کمپ کوئرا ) ساخته شده توسط پارسا نظمی © 
    </h6>
  )
}

export default Footer