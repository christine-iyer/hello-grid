import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/order-api';
import styles from './NewOrderPage.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import MenuList from '../../components/MenuList/MenuList';
import AccountNumList from '../../components/AccountNumList/AccountNumList';
import DescriptionList from '../../components/DescriptionList/DescriptionList';
import PayeeList from '../../components/PayeeList/PayeeList';
import UsesList from '../../components/UsesList/UsesList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {
  const [menuItems, setMenuItems] = useState([]);
  const [activeAcctNum, setActiveAcctNum] = useState('');
  const [activeDescription, setActiveDescription] = useState('');
  const [activePayee, setActivePayee] = useState('');
  const [activeUses, setActiveUses] = useState('');

  const [cart, setCart] = useState(null);
  
  const accountNumsRef = useRef([]);
  const descriptionsRef = useRef([]);
  const payeesRef = useRef([]);
  const usesRef = useRef([]);

  const navigate = useNavigate();

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();




      accountNumsRefRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);



      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);



      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);



      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);


      setMenuItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);
  // Providing an empty 'dependency array'
  // results in the effect running after
  // the FIRST render only

  /*-- Event Handlers --*/
  async function handleAddToOrder(itemId) {
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    setCart(updatedCart);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  return (
    <main className={styles.NewOrderPage}>
      <aside>
        <CategoryList
          categories={categoriesRef.current}
          cart={setCart}
          setActiveCat={setActiveCat}
        />
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <MenuList
        menuItems={menuItems.filter(item => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </main>
  );
}