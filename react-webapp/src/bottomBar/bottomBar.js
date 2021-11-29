import React from "react";
import Input from "../input/input";

import "./bottomBar.css";

const BottomBar = ({ location, onLocationChange }) => {
  return (
    <div className='bottom-bar-cmpt'>
      <span className='bottom-bar-value'>
        Longitude:{" "}
        <input
          value={location.longitude}
          onChange={(e) =>
            onLocationChange({ ...location, longitude: e.target.value })
          }
        />
      </span>
      <span className='bottom-bar-value'>
        Latitude:{" "}
        <input
          value={location.latitude}
          onChange={(e) =>
            onLocationChange({ ...location, latitude: e.target.value })
          }
        />
      </span>
    </div>
  );
};

export default BottomBar;
