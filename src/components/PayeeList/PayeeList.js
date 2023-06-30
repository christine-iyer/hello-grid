import styles from './PayeeList.module.scss'
export default function PayeeList({ payees, activePayee, setActivePayee }) {
  const cats = payees.map(cat =>
    <li
      key={cat}
      className={cat === activePayee ? 'active' : ''}
      // FYI, the below will also work, but will give a warning
      // className={cat === activePayee && 'active'}
      onClick={() => setActivePayee(cat)}
    >
      {cat}
    </li>
  );
  return (
    <ul className={styles.categorylist}>
      {cats}
    </ul>
  );
}