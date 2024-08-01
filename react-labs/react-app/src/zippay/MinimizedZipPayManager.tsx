import React, { createContext, Reducer, useReducer } from 'react';
import Navbar from './Navbar';
import './zippay.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function MinimizedZipPayManager() {
  return (
    // <BrowserRouter>
        <section className="zippay-main">
        <Navbar></Navbar>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Routes>
                        <Route
                            path="/"
                            element={<h2>Content goes here</h2>}
                        />
                        <Route
                            path="send-receive"
                            element={<h2>Send-Receive placeholder</h2>}
                        />
                        <Route
                            path="split-the-bill"
                            element={<h2>Split the Bill placeholder</h2>}
                        />
                        <Route
                            path="balance"
                            element={<h2>Balance</h2>}
                        />
                        <Route
                            path="account-settings"
                            element={<h2>Account Settings placeholder</h2>}
                        />
                        <Route
                            path="search"
                            element={<h2>Search placeholder</h2>}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    </section>
    // {/* </BrowserRouter> */}
  );
}

export default MinimizedZipPayManager;