import { Link } from 'react-router-dom';
import { logOut } from "../utilities/users-service";

const NavBar = ({user, setUser}) => {
  
  const handleLogout = () => {
    logOut()
    setUser(null)
  }
  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      <span>Welcome {user.name}</span>{" "}
      <Link to="/" onClick={handleLogout} >Logout</Link>
    </nav>
  );
}

export default NavBar