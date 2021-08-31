import { Currency } from "./currency";
import { useState } from "react";
import "./App.css"

function App() {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  function currencychanged(event) {
    setBaseCurrency(event.target.value);    
  }

  // const Component = React.useMemo(() => <Currency baseCurrency= {baseCurrency}/>,[baseCurrency])
  // const Component2 = React.useCallback(<Currency baseCurrency= {baseCurrency}/>,[baseCurrency])

  return (
    <div className="currency-container">
      <select onChange={currencychanged}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
      <Currency baseCurrency={baseCurrency}  />
      {/* <Component/> */}
    </div>
  );
}

export default App;
