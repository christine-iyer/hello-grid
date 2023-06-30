import styles from './AcctNumList.module.scss'
export default function AccountNumList({ acctNums, activeAcct, setActiveAcct }) {
  const cats = acctNums.map(cat =>
    <li
      key={cat}
      className={cat === activeAcct ? 'active' : ''}
      // FYI, the below will also work, but will give a warning
      // className={cat === activeCat && 'active'}
      onClick={() => setActiveAcct(cat)}
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