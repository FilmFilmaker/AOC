"use client";
import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";


const SearchBar = () => {
    const [manufacturer, setManufaturer]= useState('');
  return (
    
        <div className="searchbar__item">
            <SearchManufacturer
                manufacturer={manufacturer}
                setManufacturer={setManufaturer}
                />
        </div>
    
  )
}

export default SearchBar