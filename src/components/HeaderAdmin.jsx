import { Link } from "react-router-dom";

const HeaderAdmin = () => {
    return (
      <div className="container-header">
        <header>
          <h1>COWORK Admin</h1>
          <nav>
            <ul>
              <li>
                  <Link to = {"/admin/"}>Home</Link>
              </li>
              <li>
                  <Link to = {"/admin/coworkings"}>Coworkings</Link>
              </li>
              <li>
                  <Link to = {"/admin/users"}>Users</Link>
              </li>
              <li>
                  <Link to = {"/"}>Disconnect</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
}

export default HeaderAdmin;