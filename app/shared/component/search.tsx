import { ChangeEvent } from "react";
import { CommonProps } from "~/shared/types/common.props";

type Input = CommonProps &  {
    name: string,
    defaultValue: string,
    placeholder: string,
}

type Props =  & CommonProps & {
  searchInput: Input,
  locationInput?: Input
  //onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Search(props: Props){
  const {id, className, searchInput, locationInput} = props;
  
  return (
    <div id={id} className={className}>
      <div className="grid grid-cols-1 md:grid-cols-9 gap-px">
        <div className="md:col-span-4">
          <input {...props.searchInput} />
        </div>
        <div className="divider my-0 md:hidden"></div>
        <div className="md:col-span-4">
          <input {...props.locationInput} />
        </div>
      </div>
    </div>

  )
}