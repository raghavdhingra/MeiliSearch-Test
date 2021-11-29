import axios from "axios";
import React, { useEffect, useState } from "react";

import {
  INDEX_NAME,
  MEILI_API_KEY,
  MEILI_SEARCH_BASE_API,
} from "../utilities/constants";

import "./productList.css";

const ProductList = ({
  searchStr = "",
  order = "",
  filter = "",
  location,
  radius,
}) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const apiData = {};

    /*
      Multiple sort can be achieved by using checkboxes,
      but for now I've kept it to radio buttons for
      easy understanding
    */
    if (filter && order) {
      if (filter === "geo") {
        if (radius && radius > 0) {
          apiData[
            "filter"
          ] = `_geoRadius(${location.latitude}, ${location.longitude}, ${radius})`;
        }

        apiData["sort"] = [
          `_geoPoint(${location.latitude}, ${location.longitude}):${order}`,
        ];
      } else {
        apiData["sort"] = [`${filter}:${order}`];
      }
    }

    /*
      We can implement debounce for lazy search,
      if we don't want to send repetitive requests
      on search query change
    */
    axios({
      url: `${MEILI_SEARCH_BASE_API}/indexes/${INDEX_NAME}/search`,
      method: "POST",
      headers: {
        "X-Meili-API-Key": MEILI_API_KEY,
      },
      data: {
        q: searchStr,
        ...apiData,
      },
    }).then(({ data: { hits } }) => setProductList(hits));
  }, [searchStr, order, filter, location, radius]);

  const getKms = (num) => (num / 1000).toFixed(2);

  return (
    <div className='product-list-cmpt'>
      {productList && productList.length > 0 ? (
        <ul className='product-list-wrapper'>
          {productList.map((product) => {
            const {
              id,
              name,
              price,
              store_name,
              rating,
              address,
              _geoDistance: distance,
            } = product;

            return (
              <li key={id} className='product-list-item'>
                <h2>
                  {name} <span className='product-rating'>{rating}/5</span>
                </h2>
                <p>Price: ₹{price}</p>
                <p>{store_name}</p>
                <p>Address: {address}</p>
                {distance && (
                  <b className='distance-text'>{getKms(distance)}kms away</b>
                )}
                <p className='buy-button-wrapper'>
                  <button className='buy-button'>Buy Now</button>
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3 className='no-result'>No result found</h3>
      )}
    </div>
  );
};

export default ProductList;
