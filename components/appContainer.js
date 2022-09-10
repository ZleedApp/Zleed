import styles from "../styles/AppConatiner.module.scss";
import Link from "next/link";
import {MdSearch} from "react-icons/md";
import Image from "next/image";
import defaultImage from "../public/default_img.png";

export default function AppContainer({ children }) {
  return (
    <div className={styles.mainContainer}>

      <div className={styles.headerBar}>
        <label>Zleed<sup>ALPHA</sup></label>

        <form action="/search">
          <input name="q" type="text" placeholder="Search" />
        </form>

        <div className={styles.headerBarIcons}>
          <Link href="/register">
            <button>Register</button>
          </Link>
          <Link href="/login">
            <button>Login</button>
          </Link>

          <MdSearch size={28} className={styles.mobileIcon} />
        </div>
      </div>

      <div className={styles.mainContent}>
        {children}
      </div>
    </div>
  );
}