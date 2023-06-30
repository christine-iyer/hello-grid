import styles from './UseList.module.scss'
export default function UseList({ uses, activeUse, setActiveUse }) {
  const cats = uses.map(cat =>
    <li
      key={cat}
      className={cat === activeUse ? 'active' : ''}
      // FYI, the below will also work, but will give a warning
      // className={cat === activeUse && 'active'}
      onClick={() => setActiveUse(cat)}
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