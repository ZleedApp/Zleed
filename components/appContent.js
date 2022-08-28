import styles from '../styles/AppContent.module.css';

export default function AppContent({ children }) {
  return (
    <div className={styles.appContent}>
      <div className={styles.sideBar}>
        <h3>Followed Channels</h3>
      </div>
      <div className={styles.sideBarContent}>
        {children}
      </div>
    </div>
  )
}