import Link from "next/link";
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <label>Zleed</label>

        <form className={styles.navSearch}>
          <input type="text" placeholder="Search" />
        </form>

        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            <Link href="/register">
              <button>Register</button>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/login">
              <button>Login</button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}