import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-header">
      <header>
        <h1>COWORK Search</h1>
        <nav>
          <ul>
            <li>
                <Link to = {"/"}>Home</Link>
            </li>
            <li>
                <Link to = {"/coworkings"}>Coworking List</Link>
            </li>
            <li>
                <Link to = {"/add"}>Add Coworking</Link>
            </li>
            <li>
                <Link to = {"/login"}>Login</Link>
            </li>
            <li>
                <Link to = {"/signup"}>Signup</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;