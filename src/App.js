import Header from "./component/Header"
import Body from "./component/Body"
import { useState } from "react"
import "./App.css"

function App() {

  const [data,setData] = useState([]);
  const updateData = (ele)=> {setData(ele)};
  return (
    <div className="App">
      <Header updateData={updateData}/>
      <Body data={data}/>
    </div>
  );
}

export default App;
