import React, { useState } from "react";

import Input from "../input/input";
import Navbar from "../navbar/navbar";
import Filter from "../filter/filter";
import ProductList from "../productList/productList";

import "./dashboard.css";

const Dashboard = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <Navbar />
      <div className='body-paragraph'>
        <h1>Search anything</h1>
        <p className='body-description'>from a wide range of products</p>
      </div>
      <div className='dashboard-container'>
        <Input
          className='dashboard-input'
          value={value}
          placeholder='Type to search...'
          onChange={(e) => setValue(e)}
        />
        <div className='product-section'>
          <Filter />
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
