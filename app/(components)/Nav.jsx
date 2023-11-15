import {
  faHome,
  faTicket,
  faPenToSquare,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center ml-5 space-x-7">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon ml-1" />
          <p className="text-xs">Home</p>
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon ml-2" />
          <p className="text-xs">Ticket</p>
        </Link>
        <Link href="/Forum">
          <FontAwesomeIcon icon={faPenToSquare} className="icon ml-2" />
          <p className="text-xs">Forum</p>
        </Link>
        <Link href="/">
          <FontAwesomeIcon icon={faUser} className="icon ml-1" />
          <p className="text-xs">User</p>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
