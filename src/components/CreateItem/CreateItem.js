import { useState, useEffect } from 'react'

export default function CreateItem() {
     const [items, setItems] = useState([])
     const [foundItem, setFoundItem] = useState(null)
     const [newItem, setNewItem] = useState({
          name: '',
          emoji: '',
          category: '',
          price: '',
          barter: false


          //     dateOfExpense: '',
          //     itemDescription: '',
          //     payee: '',
          //     description: '',
          //     usedFor: '',
          //     numUnits: false,
          //     beforeTnSAmount: '',
          //     tax: '',
          //     shipping: '',
          //     total: '', 
          //     accountNum: 10000, 
          //     barter: false

     })
     // index
     const getItems = async () => {
          try {
               const response = await fetch('/api/items')
               const data = await response.json()
               setItems(data)
          } catch (error) {
               console.error(error)
          }
     }
     // delete
     const deleteItem = async (id) => {
          try {
               const response = await fetch(`/api/items/${id}`, {
                    method: "DELETE",
                    headers: {
                         'Content-Type': 'application/json'
                    }
               })
               const data = await response.json()
               setFoundItem(data)
          } catch (error) {
               console.error(error)
          }
     }
     // update
     const updateItem = async (id, updatedData) => {
          try {
               const response = await fetch(`/api/items/${id}`, {
                    method: "PUT",
                    headers: {
                         'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ ...updatedData })
               })
               const data = await response.json()
               setFoundItem(data)
          } catch (error) {
               console.error(error)
          }
     }
     // create
     const createItem = async () => {
          try {
               const response = await fetch(`/api/items`, {
                    method: "POST",
                    headers: {
                         'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ ...newItem })
               })
               const data = await response.json()
               setFoundItem(data)
               setNewItem({
                    name: '',
                    emoji: '',
                    category: '',
                    price: '',
                    barter: false
                     //     dateOfExpense: '',
          //     itemDescription: '',
          //     payee: '',
          //     description: '',
          //     usedFor: '',
          //     numUnits: false,
          //     beforeTnSAmount: '',
          //     tax: '',
          //     shipping: '',
          //     total: '', 
          //     accountNum: 10000, 
          //     barter: false

               })
          } catch (error) {
               console.error(error)
          }
     }

     const handleChange = (evt) => {
          setNewItem({ ...newItem, [evt.target.name]: evt.target.value })
     }

     useEffect(() => {
          getItems()
     }, [foundItem])

     return (
          <>
               <h1>Add a New Account Payable</h1>

               {'Account Payable '}<input value={newItem.name} onChange={handleChange} name="name"></input><br />
               {'Description '}<input value={newItem.emoji} onChange={handleChange} name="emoji"></input><br />
               {'Quantity '}<input type="number" checked={newItem.itemQuantity} onChange={handleChange}></input><br />
               {'Item Amount '}<input value={newItem.price} onChange={handleChange} name="price"></input><br />
               {'Unit Measure '}
               <select
                    value={newItem.category}
                    onChange={handleChange}
                    name="category">
                    <option value="oz.">oz.</option>
                    <option value="gal">gal</option>
                    <option value="lb">lb</option>
                    <option value="cubicYard">cubic yard</option>
                    <option value="cubicFoot">cubic foot</option>
                    <option value="each">each</option>
                    <option value="other">other</option>


               </select><br />
               {'Barter '}
               <input type="checkbox" checked={newItem.barter} onChange={(evt) => setNewItem({ ...newItem, barter: evt.target.checked })}></input><br />
               {/* {'Sales Tax '}
               <select
                    value={newItem.salesTax}
                    onChange={handleChange}
                    name="salesTax">
                    <option value="5%">5%</option>
                    <option value="8%">8%</option>
                    <option value="0">0</option>


               </select><br /> */}
               <button onClick={() => createItem()}>Create A New Item</button>
               {
                    foundItem ? <div>
                         <h1>{foundItem.name}</h1>
                         <h2>{foundItem.emoji}</h2>
                         <h3>{foundItem.barter ? 'Barter Customer' : 'I will pay cash'}</h3>
                         <span>{foundItem.price} {foundItem.category}</span>
                    </div> : <>No Item in Found Item State</>
               }
               {
                    items && items.length ? (<ul>
                         {
                              items.map((item) => {
                                   return (
                                        <p key={item._id}>
                                             {item.name} is {item.price} {item.barter ? 'Barter' : 'Cash'}

                                        </p>
                                   )
                              })
                         }
                    </ul>) : <h1>No Items Yet Add One</h1>
               }


          </>
     )
}
