import { SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchFilteredResults } from "../../../redux/actions/FilterResActions/FilterResActions";

const Search = () => {
  let dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    dispatch(FetchFilteredResults(null,null,null,null,null,{min:0,max:3000},searchTerm));
  }, [searchTerm]);
  return (
    <section className="search-mobiles">
      <input
        type="text"
        value={searchTerm}
        onInput={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Mobile ..."
      />
      <SearchOutlined className="search-btn" />
    </section>
  );
};

export default Search;
