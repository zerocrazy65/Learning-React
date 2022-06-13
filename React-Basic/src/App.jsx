import Transaction from "./component/Transaction";
import FormComponent from "./FormComponent";
import "./App.css";
import { useState, useEffect, useReducer } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./component/ReportComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  const initData = [
    { id: 1, title: "ค่าเช่าบ้าน", amount: -4000 },
    { id: 2, title: "เงินเดือน", amount: 12000 },
    { id: 3, title: "ค่าเดินทาง", amount: -1300 },
    { id: 4, title: "ขายของ", amount: 3900 },
  ];
  const [items, setItems] = useState(initData);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0)
      .toFixed(2);
    const expense = (
      amounts
        .filter((element) => element < 0)
        .reduce((total, element) => (total += element), 0) * -1
    ).toFixed(2);

    setReportIncome(income);
    setReportExpense(expense);
  }, [items, reportIncome, reportExpense]);

  // reducer state
  //   const [showReport, setShowReport] = useState(false);
  //   const reducer = (state, action) => {
  //     switch (action.type) {
  //       case "SHOW":
  //         return setShowReport(true);
  //       case "HIDE":
  //         return setShowReport(false);
  //     }
  //   };
  //   const [result, dispatch] = useReducer(reducer, showReport);
  return (
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <div className="container">
        <h1 className="header">My Payment</h1>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">Payment Data</Link>
              </li>
              <li>
                <Link to="/insert">Add Data</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/" element={<ReportComponent />} />
            <Route
              path="/insert"
              element={
                <>
                  <FormComponent onAddItem={onAddNewItem} />{" "}
                  <Transaction items={items} />{" "}
                </>
              }
            />
          </Routes>
          {/* {showReport && <ReportComponent />} */}
        </Router>
      </div>
      {/* <h1>{result}</h1>
      <button onClick={() => dispatch({ type: "SHOW", payload: 10 })}>
        แสดง
      </button>
      <button onClick={() => dispatch({ type: "HIDE", payload: 5 })}>
        ซ่อน
      </button> */}
    </DataContext.Provider>
  );
}

export default App;
