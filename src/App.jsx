import React, { useState } from "react";
import "./App.css";
import { useParams } from "react-router-dom";

const App = () => {
  const { id } = useParams();

  const [data, setData] = useState[``];
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [val, setVal] = useState(``);

  const getData = useCallback(async () => {
    setLoading(true);
    setError(null);
    const response = await fetch(`data.json`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(true);
    }
    if (response.ok) {
      if (json === null) {
        setLoading(false);
        return;
      } else {
        setform(json._id);
        setData(json);
        setLoading(false);
      }
    }
  }, [user.token]);

  useEffect(() => {
    getData();
  }, [getData]);

  console.log(data);

  return (
    <div className="app">
      <div className="portfolio">
        <h1>jksks</h1>
      </div>
    </div>
  );
};

export default App;
