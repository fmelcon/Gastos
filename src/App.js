import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Form from "./components/Form";
import List from "./components/List";
import Total from "./components/Total";

function App() {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showhome, setShowHome] = useState(true);
  const [spending, setSpending] = useState([]);
  const [spend, setSpend] = useState({});
  const [createspend, setCreatespend] = useState(false);

  useEffect(() => {
    if (createspend) {
      setSpending([...spending, spend]);
    }
    const budgetRemaining = remaining - spend.count;
    setRemaining(budgetRemaining);

    setCreatespend(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spend]);

  return (
    <div className="container">
      <header>
        <h1>Presupuesto</h1>
        <div className="contenido-principal contenido">
          {showhome ? (
            <Home
              setBudget={setBudget}
              setRemaining={setRemaining}
              setShowHome={setShowHome}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form setSpend={setSpend} setCreatespend={setCreatespend} />
              </div>
              <div className="one-half column">
                <List spending={spending} />
                <Total budget={budget} remaining={remaining} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
