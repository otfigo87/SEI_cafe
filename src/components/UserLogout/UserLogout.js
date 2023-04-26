import styles from "./UserLogout.module.css";
import { logOut } from "../../utilities/users-service";

export default function UserLogout({ user, setUser }) {
  function handleLogout() {
    logOut();
    setUser(null);
  }

  return (
    <div className={styles.UserLogout}>
      <div>{user.name}</div>
      <div className={styles.email}>{user.email}</div>
      <button className="btn-sm" onClick={handleLogout}>
        LOG OUT
      </button>
    </div>
  );
}
