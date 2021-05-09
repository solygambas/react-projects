import { useState } from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";

// Reference: https://github.com/tannerlinsley/react-query/tree/master/examples/pagination

const fetchPlanets = async (page = 1) => {
  const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);
  const { status, data, error, isFetching, isPreviousData } = useQuery(
    ["planets", page],
    () => fetchPlanets(page),
    {
      keepPreviousData: true,
      staleTime: 5000,
      // cacheTime: 10,
      // onSuccess: () => console.log("data fetched with no problemo"),
    }
  );

  return (
    <div>
      <h2>Planets</h2>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error: {error.message}</div>}
      {status === "success" && (
        <>
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            Previous Page
          </button>
          {page}
          <button
            onClick={() => {
              setPage((old) => (data?.next ? old + 1 : old));
            }}
            disabled={isPreviousData || !data?.next}
          >
            Next Page
          </button>
          <div>
            {data.results.map((planet) => (
              <Planet key={planet.name} planet={planet} />
            ))}
          </div>
        </>
      )}
      {
        // Since the last page's data potentially sticks around between page requests,
        // we can use `isFetching` to show a background loading
        // indicator since our `status === 'loading'` state won't be triggered
        isFetching ? <span> Loading...</span> : null
      }{" "}
    </div>
  );
};

export default Planets;
