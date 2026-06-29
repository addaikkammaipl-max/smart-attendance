import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>IPMS</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Student</Link>
        <Link to="/admin-login">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;