// import { useState, useEffect, useRef } from 'react';
// import * as itemsAPI from '../../utilities/items-api';
// import * as ordersAPI from '../../utilities/order-api';
// import styles from './NewOrderPage.module.scss';
// import { Link, useNavigate } from 'react-router-dom';
// import MenuList from '../../components/MenuList/MenuList';
// import AccountNumList from '../../components/AccountNumList/AccountNumList';
// import DescriptionList from '../../components/DescriptionList/DescriptionList';
// import PayeeList from '../../components/PayeeList/PayeeList';
// import UseList from '../../components/UseList/UsesList';
// import OrderDetail from '../../components/OrderDetail/OrderDetail';
// import UserLogOut from '../../components/UserLogOut/UserLogOut';

// export default function NewOrderPage({ user, setUser }) {
//   const [menuItems, setMenuItems] = useState([]);
//   const [activeAcctNum, setActiveAcctNum] = useState('');
//   const [activeDescription, setActiveDescription] = useState('');
//   const [activePayee, setActivePayee] = useState('');
//   const [activeUse, setActiveUse] = useState('');

//   const [cart, setCart] = useState(null);

//   const accountNumsRef = useRef([]);
//   const descriptionsRef = useRef([]);
//   const payeesRef = useRef([]);
//   const usesRef = useRef([]);

//   const navigate = useNavigate();

//   useEffect(function () {
//     async function getItems() {
//       const items = await itemsAPI.getAll();

//       accountNumsRef.current = items.reduce((ans, item) => {
//         const an = item.accountNum.name;
//         return ans.includes(an) ? ans : [...ans, an];
//       }, []);
//       setMenuItems(items);
//       setActiveAcctNum(accountNumsRef.current[0]);



//       descriptionsRef.current = items.reduce((descs, item) => {
//         const desc = item.description.name;
//         return descs.includes(desc) ? descs : [...descs, desc];
//       }, []);
//       setMenuItems(items);
//       setActiveDescription(descriptionsRef.current[0]);



//       payeesRef.current = items.reduce((pays, item) => {
//         const pay = item.payee.name;
//         return pays.includes(pay) ? pays : [...pays, pay];
//       }, []);
//       setMenuItems(items);
//       setActivePayee(payeesRef.current[0]);


//       usesRef.current = items.reduce((uses, item) => {
//         const use = item.usedFor.name;
//         return uses.includes(use) ? uses : [...uses, use];
//       }, []);


//       setMenuItems(items);
//       setActiveUse(usesRef.current[0]);
//     }
//     getItems();
//     async function getCart() {
//       const cart = await ordersAPI.getCart();
//       setCart(cart);
//     }
//     getCart();
//   }, []);
//   // Providing an empty 'dependency array'
//   // results in the effect running after
//   // the FIRST render only

//   /*-- Event Handlers --*/
//   async function handleAddToOrder(itemId) {
//     const updatedCart = await ordersAPI.addItemToCart(itemId);
//     setCart(updatedCart);
//   }

//   async function handleChangeQty(itemId, newQty) {
//     const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
//     setCart(updatedCart);
//   }

//   async function handleCheckout() {
//     await ordersAPI.checkout();
//     navigate('/orders');
//   }

//   return (
//     <main className={styles.NewOrderPage}>
//       <aside>

//         <PayeeList
//           payees={payeesRef.current}
//           cart={setCart}
//           setActivePayee={setActivePayee}
//         />


//         <DescriptionList
//           descriptions={descriptionsRef.current}
//           cart={setCart}
//           setActiveDescription={setActiveDescription}
//         />


//         <UseList
//           uses={usesRef.current}
//           cart={setCart}
//           setActiveUse={setActiveUse}
//         />


//         <AccountNumList
//           accountNums={accountNumsRef.current}
//           cart={setCart}
//           setActiveAcctNum={setActiveAcctNum}
//         />




//         <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
//         <UserLogOut user={user} setUser={setUser} />
//       </aside>
//       <MenuList
//         menuItems={menuItems.filter(item => item.payee.name === activePayee)}
//         handleAddToOrder={handleAddToOrder}
//       />
//       <OrderDetail
//         order={cart}
//         handleChangeQty={handleChangeQty}
//         handleCheckout={handleCheckout}
//       />
//     </main>
//   );
// }

import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/order-api';
import styles from './NewOrderPage.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
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