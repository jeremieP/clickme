import styles from './index.module.css'

export const Button = ({ label, isActive, onClickHandler }) => (
  <button
    className={styles.Button}
    disabled={!isActive}
    type="button"
    onClick={onClickHandler}
  >
    {label}
  </button>
)