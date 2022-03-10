import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipe, removeRecipe } from "../features/appSlice";

const useFetch = (term) => {
  const [pageNumber, setPageNumber] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(
        fetchRecipe({
          params: {
            q: term,
            from: pageNumber,
            to: pageNumber + 10,
          },
        })
      );
    }, 5000);

    return () => {
      dispatch(removeRecipe());
      clearTimeout(timer);
    };
  }, [term, pageNumber, dispatch]);

  return { pageNumber, setPageNumber };
};

export default useFetch;
