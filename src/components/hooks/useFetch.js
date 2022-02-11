import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipe, removeRecipe } from "../../features/appSlice";

function useFetch(term) {
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
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
      setLoading(false);
      dispatch(removeRecipe());
    };
  }, [term, pageNumber, dispatch]);

  return { loading, pageNumber, setPageNumber };
}

export default useFetch;
