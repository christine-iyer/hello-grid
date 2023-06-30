import styles from './DescriptionList.module.scss'
export default function DescriptionList({ descriptions, activeDescription, setActiveDescription }) {
  const cats = descriptions.map(cat =>
    <li
      key={cat}
      className={cat === activeDescription ? 'active' : ''}
      // FYI, the below will also work, but will give a warning
      // className={cat === activeDescription && 'active'}
      onClick={() => setActiveDescription(cat)}
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