import React, { Component } from "react";
import "./index.scss";
import Products from "./pages/Products";
import HomePage from "./HomePage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import Layout from "./components/Layout";
import Bestseller from "./pages/Bestseller";
import Contactus from "./pages/Contactus";
import Newarrival from "./pages/Newarrival";
import Aboutus from "./pages/Aboutus";
import LoadingPage from "./components/loadingcomp/LoadingPage";
import { UserProvider } from "./components/UserContext";
import Header from "./components/header/Header";
export default class App extends Component {
  constructor() {
    super();
    this.state = { loading: true, arr: [] };
  }
  addItem = (newItem) => {
    this.setState({ arr: [...this.state.arr, newItem] });
  };
  componentDidMount() {
    const pathname = window.location.pathname;
    if (pathname === "/") {
      setTimeout(() => this.setState({ loading: false }), 2000);
    } else {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <>
            <LoadingPage />
          </>
        ) : (
          <UserProvider value={{ arr: this.state.arr, addItem: this.addItem }}>
            <Router>
              <Layout />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/bestseller" element={<Bestseller />} />
                <Route path="/contactus" element={<Contactus />} />
                <Route path="/newarrival" element={<Newarrival />} />
                <Route path="/aboutus" element={<Aboutus />} />
              </Routes>
            </Router>
          </UserProvider>
        )}
      </>
    );
  }
}
