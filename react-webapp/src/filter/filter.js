import React from "react";

import "./filter.css";

const Filter = ({
  filterValue,
  orderValue,
  onOrderChange,
  onFilterChange,
  onClearFilter,
  setLocation,
  radius,
  setRadius,
}) => {
  const isGeoFiltered = filterValue === "geo";

  if (isGeoFiltered && navigator && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }

  return (
    <div className='filter-cmpt'>
      <div>
        <h2>Filter</h2>
        <div className='label-wrap'>
          <input
            name='filter'
            type='radio'
            className='input-radio'
            value='name'
            onChange={(e) => onFilterChange(e.target.value)}
            checked={filterValue === "name"}
          />
          <label>Name</label>
        </div>
        <div className='label-wrap'>
          <input
            name='filter'
            type='radio'
            className='input-radio'
            value='price'
            onChange={(e) => onFilterChange(e.target.value)}
            checked={filterValue === "price"}
          />
          <label>Price</label>
        </div>
        <div className='label-wrap'>
          <input
            name='filter'
            type='radio'
            className='input-radio'
            value='rating'
            onChange={(e) => onFilterChange(e.target.value)}
            checked={filterValue === "rating"}
          />
          <label>Rating</label>
        </div>
        <div className='label-wrap'>
          <input
            name='filter'
            type='radio'
            className='input-radio'
            value='geo'
            onChange={(e) => onFilterChange(e.target.value)}
            checked={isGeoFiltered}
          />
          <label>Location</label>
        </div>
        {isGeoFiltered && (
          <div className='label-wrap'>
            <input
              value={radius}
              type='number'
              placeholder='Enter radius to filter'
              onChange={(e) => setRadius(e.target.value)}
            />
          </div>
        )}
      </div>
      {filterValue && (
        <>
          <div className='sort-wrapper'>
            <h2>Sort</h2>
            <div className='label-wrap'>
              <input
                name='sort'
                type='radio'
                className='input-radio'
                value='asc'
                onChange={(e) => onOrderChange(e.target.value)}
                checked={orderValue === "asc"}
              />
              <label>{isGeoFiltered ? "Near to Far" : "Low to High"}</label>
            </div>
            <div className='label-wrap'>
              <input
                name='sort'
                type='radio'
                className='input-radio'
                value='desc'
                onChange={(e) => onOrderChange(e.target.value)}
                checked={orderValue === "desc"}
              />
              <label>{isGeoFiltered ? "Far to Near" : "High to Low"}</label>
            </div>
          </div>
          <button onClick={onClearFilter} className='clear-filter-button'>
            Clear Filter
          </button>
        </>
      )}
    </div>
  );
};

export default Filter;
