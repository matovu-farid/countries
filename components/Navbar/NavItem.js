import Link from "next/link";
const NavItem = ({ children, href }) => (
  <Link href={href} className="nav-item p-2">
    <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0">
      {children}
    </a>
  </Link>
);
export default NavItem;
