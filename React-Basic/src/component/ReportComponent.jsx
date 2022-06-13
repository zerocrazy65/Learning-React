import { useContext } from "react";
import DataContext from "../data/DataContext";
import "./ReportComponent.css";
const ReportComponent = () => {
  const { income, expense } = useContext(DataContext);
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  return (
    <div>
      <h4>Total : </h4>
      <h1>{formatNumber((income - expense).toFixed(2))} Bath</h1>
      <div className="report-container">
        <div>
          <h4>Income</h4>
          <p className="report plus ">{formatNumber(income)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="report minus">{formatNumber(expense)}</p>
        </div>
      </div>
      {/* <p> income : {income}</p>
      <p> expense : {expense}</p> */}
      {/* <DataContext.Consumer>
        {(context) => (
          <p>
            income : {context.income} expense : {context.expense}
          </p>
        )}
      </DataContext.Consumer> */}
    </div>
  );
};

export default ReportComponent;
