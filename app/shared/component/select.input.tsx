type SelectInputProps = {
  className: string,
  options: Option[],
}

type Option = {
  name: string,
  disabled?: boolean,
  selected?: boolean
}

export default function SelectInput(params: SelectInputProps){
  return ( 
    <select className={params.className}>
      { 
        params.options.map((option: Option) => (
          <option key={option.name} disabled={option.disabled} selected={option.selected}>
            {option.name}
          </option>
        ))
      }
    </select>
  )
}