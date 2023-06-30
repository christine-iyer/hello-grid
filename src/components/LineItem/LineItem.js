import styles from './LineItem.module.scss';

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  return (
    <div className={styles.LineItem}>
      <div className="flex-ctr-ctr">
        <img src={lineItem.item.emoji}></img>
        </div>
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{lineItem.item.description}</span>
        <span>{lineItem.item.price.toFixed(2)}</span>
      </div>
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
            >−</button>
          }
        <span>{lineItem.qty}</span>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
          >+</button>
        }
      </div>
      <div className="ext-price">${lineItem.extPrice.toFixed(2)}</div>
    </div>
  );
}