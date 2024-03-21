import React, { Component } from "react";
import "./index.scss";
import Products from "./pages/Products";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Bestseller from "./pages/Bestseller";
import Contactus from "./pages/Contactus";
import Newarrival from "./pages/Newarrival";
import Aboutus from "./pages/Aboutus";
import LoadingPage from "./components/loadingcomp/LoadingPage";
export default class App extends Component {
  constructor() {
    super();
    this.state = { loading: true };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2000);
    console.log("ComponentdidMount");
  }
  render() {
    return (
      <>
        {this.state.loading ? (
          <>
            <LoadingPage />
          </>
        ) : (
          <>
            <Layout />
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/bestseller" element={<Bestseller />} />
                <Route path="/contactus" element={<Contactus />} />
                <Route path="/newarrival" element={<Newarrival />} />
                <Route path="/aboutus" element={<Aboutus />} />
              </Routes>
            </Router>
          </>
        )}
      </>
    );
  }
}
