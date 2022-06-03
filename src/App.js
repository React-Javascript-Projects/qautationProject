import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Layout/Header";
import { Suspense } from "react";
import QautaionsContext from "./context/QautaionContext";
import Loader from "./componants/loader";

const QautaionDetailes = React.lazy(() => import("./pages/QautaionDetailes"));
const AllQautaion = React.lazy(() => import("./pages/AllQautaion"));
const AddNewQautaion = React.lazy(() => import("./pages/AddNewQautaion"));

function App() {
  const [qautaionList, setQautaionList] = useState([]);

  const addQautaion = (author, text) => {
    setQautaionList((prevQautaionList) => {
      return [
        ...prevQautaionList,
        { author: author, text: text, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <QautaionsContext.Provider value={{ qautaions: qautaionList }}>
        <Suspense fallback={<Loader />}>
          <Router>
            <Header />
            <Route path="/Qautaions" exact>
              <AllQautaion />
            </Route>
            <Route path="/Add" exact>
              <AddNewQautaion addQautaion={addQautaion} />
            </Route>
            <Route path="/Qautaions/:qautaionId" exact>
              <QautaionDetailes />
            </Route>
            <Route path="/Relode" exact>
              <Loader />
            </Route>
          </Router>
        </Suspense>
      </QautaionsContext.Provider>
    </div>
  );
}

export default App;
