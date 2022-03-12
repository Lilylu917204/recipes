import React from "react";
import {
  useSearchParams,
  createSearchParams,
  useNavigate,
} from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let searchTerm = searchParams.get("term") || "";
  const navigate = useNavigate();
  useFetch(searchTerm);

  const handleEvent = (e) => {
    const term = e.target.value;
    if (term) {
      setSearchParams(createSearchParams({ term }));
    } else {
      setSearchParams({});
    }
  };

  const submitEvent = (e) => {
    e.preventDefault();
    navigate(`/recipe/${searchTerm}`);
    searchTerm = searchParams.get("");
  };

  return (
    <>
      <form onSubmit={submitEvent} className="form">
        <input
          type="text"
          value={searchTerm}
          onChange={handleEvent}
          placeholder="search..."
        />
      </form>
    </>
  );
};

export default Search;
