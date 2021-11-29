import React, { useState } from "react";

import Input from "../input/input";
import Navbar from "../navbar/navbar";
import Filter from "../filter/filter";
import BottomBar from "../bottomBar/bottomBar";
import ProductList from "../productList/productList";

import "./dashboard.css";

const Dashboard = () => {
  const [value, setValue] = useState("");
  const [order, setOrder] = useState("");
  const [filter, setFilter] = useState("");
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  const handleClearFilter = () => {
    setFilter("");
    setOrder("");
  };

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
          <Filter
            filterValue={filter}
            orderValue={order}
            onOrderChange={(e) => setOrder(e)}
            onFilterChange={(e) => setFilter(e)}
            onClearFilter={handleClearFilter}
            setLocation={setLocation}
          />
          <ProductList
            searchStr={value}
            order={order}
            filter={filter}
            location={location}
          />
        </div>
      </div>
      {filter === "geo" && (
        <BottomBar
          location={location}
          onLocationChange={(e) => setLocation(e)}
        />
      )}
    </>
  );
};

export default Dashboard;
