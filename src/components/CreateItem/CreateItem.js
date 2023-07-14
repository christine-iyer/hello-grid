import { useState, useEffect } from 'react'

export default function CreateItem() {
     const [items, setItems] = useState([])
     const [foundItem, setFoundItem] = useState(null)
     const [newItem, setNewItem] = useState({
          name: '',
          emoji: '',
          category: '',
          price: 0.00,
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
               {/* {'Quantity '}<input type="number" checked={newItem.itemQuantity} onChange={handleChange}></input><br />
               */}
              {'Item Amount '}<input value={newItem.price} onChange={handleChange} name="price"></input><br />
               {'Unit Measure '}
               <select
                    value={newItem.category}
                    onChange={handleChange}
                    name="category">
   
              <option  value="A2Z">A2Z</option>
              <option  value="AC Moore">AC Moore</option>
              <option  value="AllenSterling">AllenSterling</option>
              <option  value="Balance">Balance</option>
              <option value="Broadway Gardens">Broadway Gardens</option>
              <option  value="Bulk Apothecary">Bulk Apothecary</option>
              <option value="CMP">CMP</option>
              <option  value="CVS">CVS</option>
              <option  value="Diepietros">Diepietros</option>
              <option  value="Dishwaser-Uncle Andy">Dishwaser-Uncle Andy</option>
              <option value="Dollar Store">Dollar Store</option>
              <option  value="Griffen Greenhouse">Griffen Greenhouse</option>
              <option  value="Handsink-rest equiment store">Handsink-rest equiment store</option>
              <option  value="Heat system for grow room">Heat system for grow room</option>
              <option  value="High Tech">High Tech</option>
              <option value="Home Depot">Home Depot</option>
              <option  value="Independent Power">Independent Power</option>
              <option  value="Jordan Farm">Jordan Farm</option>
              <option  value="Labor Cost-Rob Fogg">Labor Cost-Rob Fogg</option>
              <option  value="Leapin Lizards">Leapin Lizards</option>
              <option value="Leroux Kitchen">Leroux Kitchen</option>
              <option  value="Friends">Friends</option>
              <option  value="Work">Work</option>
              <option  value="Code">Code</option>
              <option  value="Misc">Misc</option>
              <option value="Family">Family</option>
              <option  value="Friends">Friends</option>
              <option  value="Work">Work</option>
              <option  value="Code">Code</option>
              <option  value="Misc">Misc</option>
              <option value="Family">Family</option>
              <option  value="Friends">Friends</option>
              <option  value="Work">Work</option>
              <option  value="Code">Code</option>
              <option  value="Misc">Misc</option>
              <option value="Family">Family</option>
              <option  value="Friends">Friends</option>
              <option  value="Work">Work</option>
              <option  value="Code">Code</option>
              <option  value="Misc">Misc</option>
              <option value="Family">Family</option>
              <option  value="Friends">Friends</option>
              <option  value="Work">Work</option>
              <option  value="Code">Code</option>
              <option  value="Misc">Misc</option>
              <option value="Family">Family</option>
              <option  value="Friends">Friends</option>
              <option  value="Work">Work</option>
              <option  value="Code">Code</option>
              <option  value="Misc">Misc</option>


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
