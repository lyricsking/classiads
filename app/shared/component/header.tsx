import { Link } from "@remix-run/react";
import DropdownMenu, {
  DropdownMenuType,
} from "~/shared/component/dropdown.menu";
import { CommonProps } from "~/shared/types/common.props";

type HeaderProps = CommonProps & {
  title: string;
  titleLink: string;
};

const menu: DropdownMenuType[] = [
  {
    id: "project",
    name: "Project",
    link: "#projects",
  },
  {
    id: "stats",
    name: "Stats",
    link: "#stats",
  },
];

export default function Header(props: HeaderProps) {
  return (
    <div className={`navbar max-w-full px-3 ${props.className}`}>
      <div className="navbar-start">
        <Link to={props.titleLink} className="pe-2 text-xl font-bold">
          {props.title}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn hidden">Button</a>
        <DropdownMenu className="lg:hidden" menu={menu} />
      </div>
    </div>
  );
}
