import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="bg-yellow-500 flex items-center justify-around uppercase px-4 py-3 border-b-8 border-stone-200 sm:px-6">
      {" "}
      <Link to="/" className="tracking-widest ">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
