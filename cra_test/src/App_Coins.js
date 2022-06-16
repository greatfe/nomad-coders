import { useEffect, useState } from "react";

const coinUrl = 'https://api.coinpaprika.com/v1/tickers';


function App() {
  const [loading, setLoading] = useState(true);
  const [tickers, setTickers] = useState([]);

  
  useEffect(() => {
    fetch(coinUrl)
      .then(response => response.json())
      .then(json => {
        setTickers(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! ({tickers.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {tickers.map((ticker,idx) => {
          return <li key={idx}>{ticker.name} ({ticker.symbol}) : {ticker.quotes.USD.price} USD</li>
        })}
      </ul>
    </div>
  );
}

export default App;