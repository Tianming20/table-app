import "../../src/App.css"
import CSVReader from "./CSVReader"

function Header({updateData}) {
  return (
    <div className="header">
      <span className="App-name">All Labs | <b>Frontend Case Study</b></span>
      <span className="blank"></span>
      <span><CSVReader updateData={updateData}/></span>
    </div>
  );
}

export default Header;