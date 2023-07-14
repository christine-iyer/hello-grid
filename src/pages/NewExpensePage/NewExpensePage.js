import NewItem from "../../components/NewItem/NewItem";






const handleChange = (event) => {
  setItem({ ...item, [event.target.name]: event.target.value })
}
const [items, setItems] = useState([])
const createItem = async () => {
  try {
    const response = await fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ ...item })
    })
    const data = await response.json()
    setItems([data, ...items])
  } catch (error) {
    console.error(error)
  } finally {
    setItem({
      name: '',
      emoji: '',
      category: '',
      price: '', 
      barter: false
    })
  }
}


import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.scss'

import Auth from './components/Auth/Auth'
import UserLogOut from './components/UserLogOut/UserLogOut'
import CreateBookmark from './components/CreateBookmark/CreateBookmark'
import BookmarkList from './components/BookmarkList/BookmarkList'
import { Card,Button, Form, Row, Col } from 'react-bootstrap'
import { Cloudinary } from "@cloudinary/url-gen";
import UploadWidget from './components/UploadWidget/UploadWidget'


export default function App() {
 

  const handleChange = (event) => {
    setBookmark({ ...bookmark, [event.target.name]: event.target.value })
  }

  const [error, updateError] = useState();

  const [bookmark, setBookmark] = useState({
    title: '',
    category: '',
    image: '',
    body: ''
  })
  const [bookmarks, setBookmarks] = useState([])



  const createBookmark = async () => {
    try {
      const response = await fetch('/api/bookmarks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ ...bookmark })
      })
      const data = await response.json()
      setBookmarks([data, ...bookmarks])
    } catch (error) {
      console.error(error)
    } finally {
      setBookmark({
        title: '',
        category: '',
        image: '',
        body: ''
      })
    }
  }
  const listBookmarksByUser = async () => {
    try {
      const response = await fetch('/api/users/bookmarks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      })
      const data = await response.json()
      setBookmarks(data)
    } catch (error) {
      console.error(error)
    }
  }
  const deleteBookmark = async (id) => {
    try {
      const response = await fetch(`/api/bookmarks/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const data = await response.json()
      const bookmarksCopy = [...bookmarks]
      const index = bookmarksCopy.findIndex(bookmark => id === bookmarks._id)
      bookmarksCopy.splice(index, 1)
      setBookmarks(bookmarksCopy)
    } catch (error) {
      console.error(error)
    }
  }
  const updateBookmark = async (id, updatedData) => {
    try {
      const response = await fetch(`/api/bookmarks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(updatedData)
      })
      const data = await response.json()
      const bookmarksCopy = [...bookmarks]
      const index = bookmarksCopy.findIndex(bookmark => id === bookmarks._id)
      bookmarksCopy[index] = { ...bookmarksCopy[index], ...updatedData }
      setBookmarks(bookmarksCopy)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
 


{/* 
            <div className="container">
                <h2>Unsigned with Upload Preset</h2>
                <UploadWidget onUpload={handleOnUpload}>
                    {({ open }) => {
                        function handleOnClick(e) {
                            e.preventDefault();
                            open();
                        }
                        return (
                            <button onClick={handleOnClick}>
                                Upload an Image
                            </button>
                        )
                    }}
                </UploadWidget>

                {error && <p>{error}</p>}

                {/* {url && (
                    <Card key={url._id} className="card" style={{ width: '118rem' }}
                    >
                        <Card.Img placeholder="holder.js/100px180" variant="top" id="uploadedimage" ></Card.Img>
                        <Card.Body className="url">{url}</Card.Body>
                    </Card>
                )} </div>*/}
             
      
      <CreateBookmark
        createBookmark={createBookmark}
        bookmark={bookmark}
        handleChange={handleChange}
      />
      
    </>
  )
}