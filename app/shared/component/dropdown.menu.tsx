import { Link, NavLink } from "@remix-run/react"
import { CommonProps } from "../types/common.props"

type Props = CommonProps & {
  menu: DropdownMenuType[]
}

export type DropdownMenuType = {
  id: string,
  name: string,
  link: string
}

export default function DropdownMenu(params: Props){
  const { className, menu } = params;
  return (
    <div className={`dropdown dropdown-end ${className}`}>
      <div tabIndex={0} role="button" className="ps-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72">
        { menu.map((menuItem: DropdownMenuType) => (
            <li key={menuItem.id}>
              <NavLink 
                to={menuItem.link} 
                className={({ isActive, isPending }) => isActive ? "bg-base-100" : "bg-base-200"}
              >
                {menuItem.name}
              </NavLink>
            </li>
          )) 
        }
      </ul>
    </div>
  )
}