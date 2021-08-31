import React, { useEffect, useState } from "react";

export function Currency({ baseCurrency }) {
  const [rates, setRates] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.exchangerate.host/latest?base=${baseCurrency}`)
      .then((response) => response.json())
      .then(({ success, rates }) => {
        if (!success) {
          setError("Something went wrong");
        } else {
          setRates(rates);
        }
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [baseCurrency]);

  function renderRates() {
    return (
      <ul>
        {Object.entries(rates).map(([currency, value]) => (
          <li>
            {baseCurrency} - {currency} - {value}
          </li>
        ))}
      </ul>
    );
  }
  function renderError() {
    return <h2>{error}</h2>;
  }

  function renderLoading() {
    return <h1>Loading...</h1>;
  }

  if (loading) {
    return renderLoading();
  }
  if (error) {
    return renderError();
  }
  return renderRates();
}
