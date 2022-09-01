import React from "react";

const SearchInput = ({ filter, setFilter }) => {
  return (
    <div className="mt-2 mb-4 d-flex justify-content-center">
      <div className="col-5">
        <input
          type="text"
          className="form-control col-8"
          placeholder="Search..."
          value={filter}
          onChange={(e)=>setFilter(e.target.value)}
        />
        
      </div>
    </div>
  );
};

export default SearchInput;
