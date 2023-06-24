import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss'

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp; | &nbsp;
      <Link to="/fruits">Fruit Page</Link>
      &nbsp; | &nbsp;
      <Link to="/todos">Todos Page</Link>
      

    </nav>
  );
}