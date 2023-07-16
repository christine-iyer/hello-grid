import { useState, useEffect } from 'react'




export default function NewItemPage ({  }){
    const [items, setItems] = useState([])
    const [foundItem, setFoundItem] = useState(null)
    const [newItem, setNewItem] = useState({
        name: '',
        emoji:'',
        category:'',
        price:1.99,
        barter: false
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
                body: JSON.stringify({...updatedData})
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
                    body: JSON.stringify({...newItem})
                })
                const data = await response.json()
                setFoundItem(data)
                setNewItem({
                    name: '',
        emoji:'',
        category:'',
        price:1.99,
        barter: false
                })
            } catch (error) {
                console.error(error)
            }
        }

    const handleChange = (evt) => {
        setNewItem({...newItem, [evt.target.name]: evt.target.value})
    }

    useEffect(()=> {
        getItems()
    }, [foundItem])

    return (
        <>
            {
                items && items.length ? (<ul>
                    {
                        items.map((item) => {
                            return (
                                <li key={item._id}>
                                    {item.name} is {item.emoji} {item.barter? "and it's barter" : "it's not ready to eat"}
                                    <br/><button onClick={() => deleteItem(item._id)}>X</button>
                                </li>
                            )
                        })
                    }
                </ul>): <h1>No Items Yet Add One Below</h1>
            }
            {'Name '}<input value={newItem.name} onChange={handleChange} name="name"></input><br/>
            {'Price '}<input value={newItem.price} onChange={handleChange} name="price"></input><br/>
            {'Barter'}<input type="checkbox" checked={newItem.barter} onChange={(evt) => setNewItem({...newItem, readyToEat: evt.target.checked })}></input><br/>
            <button onClick={() => createItem() }>Create A New Item</button>
            {
                foundItem? <div>
                    <h1>{foundItem.name}</h1>
                    <h2>{foundItem.price}</h2>
                    <h3>{foundItem.barter? 'I barter': 'I am cash'}</h3>
                </div>: <>No Item in Found Item State</>
            }
    
            
        </>
    )
}