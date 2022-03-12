import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipe, removeRecipe } from "features/appSlice";

const useFetch = (term) => {
  const [pageNumber, setPageNumber] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchRecipe({
        params: {
          q: term,
          from: pageNumber,
          to: pageNumber + 10,
        },
      })
    );

    return () => {
      dispatch(removeRecipe());
    };
  }, [term, pageNumber, dispatch]);

  return { pageNumber, setPageNumber };
};

export default useFetch;
