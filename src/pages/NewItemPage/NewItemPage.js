// import NewItem from "../../components/NewItem/NewItem";






// const handleChange = (event) => {
//   setItem({ ...item, [event.target.name]: event.target.value })
// }
// const [items, setItems] = useState([])
// const createItem = async () => {
//   try {
//     const response = await fetch('/api/items', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`
//       },
//       body: JSON.stringify({ ...item })
//     })
//     const data = await response.json()
//     setItems([data, ...items])
//   } catch (error) {
//     console.error(error)
//   } finally {
//     setItem({
//       name: '',
//       emoji: '',
//       category: '',
//       price: '', 
//       barter: false
//     })
//   }
// }


// import { useState, useEffect } from 'react'


// import CreateItem from './components/createItem/createItem'
// export default function NewItemPage() {
 

//   const handleChange = (event) => {
//     setItem({ ...item, [event.target.name]: event.target.value })
//   }

//   const [error, updateError] = useState();

//   const [item, setItem] = useState({
//     name: '',
//     emoji: '',
//     category: '',
//     price: '',
//     barter: false
//   })
//   const [items, setItems] = useState([])



//   const createItem = async () => {
//     try {
//       const response = await fetch('/api/items', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({ ...item })
//       })
//       const data = await response.json()
//       setItems([data, ...items])
//     } catch (error) {
//       console.error(error)
//     } finally {
//       setItem({
//         name: '',
//         emoji: '',
//         category: '',
//         price: '',
//         barter: false
//       })
//     }
//   }
//   const listItemsByUser = async () => {
//     try {
//       const response = await fetch('/api/users/items', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
//         }
//       })
//       const data = await response.json()
//       setItems(data)
//     } catch (error) {
//       console.error(error)
//     }
//   }
//   const deleteItem = async (id) => {
//     try {
//       const response = await fetch(`/api/items/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         }
//       })
//       const data = await response.json()
//       const itemsCopy = [...items]
//       const index = itemsCopy.findIndex(item => id === items._id)
//       itemsCopy.splice(index, 1)
//       setItems(itemsCopy)
//     } catch (error) {
//       console.error(error)
//     }
//   }
//   const updateItem = async (id, updatedData) => {
//     try {
//       const response = await fetch(`/api/items/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify(updatedData)
//       })
//       const data = await response.json()
//       const itemsCopy = [...items]
//       const index = itemsCopy.findIndex(item => id === items._id)
//       itemsCopy[index] = { ...itemsCopy[index], ...updatedData }
//       setItems(itemsCopy)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   return (
//     <>
 


// {/* 
//             <div className="container">
//                 <h2>Unsigned with Upload Preset</h2>
//                 <UploadWidget onUpload={handleOnUpload}>
//                     {({ open }) => {
//                         function handleOnClick(e) {
//                             e.preventDefault();
//                             open();
//                         }
//                         return (
//                             <button onClick={handleOnClick}>
//                                 Upload an Image
//                             </button>
//                         )
//                     }}
//                 </UploadWidget>

//                 {error && <p>{error}</p>}

//                 {/* {url && (
//                     <Card key={url._id} className="card" style={{ width: '118rem' }}
//                     >
//                         <Card.Img placeholder="holder.js/100px180" variant="top" id="uploadedimage" ></Card.Img>
//                         <Card.Body className="url">{url}</Card.Body>
//                     </Card>
//                 )} </div>*/}
             
      
//       <CreateItem
//         createItem={createItem}
//         item={item}
//         handleChange={handleChange}
//       />
      
//     </>
//   )
// }