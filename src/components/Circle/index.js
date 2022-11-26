import styles from './index.module.css'

export const Circle = ({ top, left }) => (
  <div className={styles.Circle} style={{ top: `${top}px`, left: `${left}px` }}></div>
)