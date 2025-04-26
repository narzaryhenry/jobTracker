import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-6 items-center">
      <Link to="/" className="text-lg font-semibold hover:underline">
        Dashboard
      </Link>
      <Link className="text-lg font-semibold hover:underline" to="/kanban">
        Kanban Board
      </Link>
      <Link className="text-lg font-semibold hover:underline" to="/analytics">
        Analytics
      </Link>
    </nav>
  );
};

export default Navbar;
