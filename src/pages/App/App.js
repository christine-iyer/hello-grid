import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.scss';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import FruitsPage from '../FruitsPage/FruitsPage';
import TodosPage from '../TodosPage/TodosPage'
// import MainPage from '../MainPage/MainPage';
// import MoviePage from '../MoviePage/MoviePage';
import NavBar from '../../components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className={styles.App}>
      <NavBar />
      { user ?
        <>
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
            <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
            <Route path="/fruits" element={<FruitsPage user={user} setUser={setUser} />} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/todos" element={<TodosPage user={user} setUser={setUser} />} />
            {/* <Route path="/" element={<MainPage username={user._id} user={user} classicMovies={classicMovies} newMovies={newMovies} />} />
                            <Route path="/movie/:id" element={<MoviePage username={user._id} user={user} />} /> */}
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}