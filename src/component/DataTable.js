import "../../src/App.css"


function DataTable({data}) {
  const render = (data) => {
    if(data.length!==0){
        return data.slice(1,21).map((row,index)=>{
            return(<tr key={index}>
                {row.map((ele,idx)=>{
                    return(<td key={idx}>
                        {ele}
                        </td>
                    )})}
                   </tr>
                )})
    } else {
        const arr = new Array(20).fill(0);
        const emptyChart = arr.map(ele=>[0,0,0,0,0,0])
        return emptyChart.map((row,index)=>{
            return(<tr key={index}>
                {row.map((ele,idx)=>{
                    return(<td key={idx}>
                    </td>)
                })}
                </tr>)})
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th style={{fontSize:"20px"}}>Date</th>
          <th style={{fontSize:"20px"}}>Open</th>
          <th style={{fontSize:"20px"}}>High</th>
          <th style={{fontSize:"20px"}}>Low</th>
          <th style={{fontSize:"20px"}}>Close</th>
          <th style={{fontSize:"20px"}}>Volume</th>
        </tr>
        </thead>
      <tbody>
       {render(data)}
      </tbody>
    </table>
    
  );
}

export default DataTable;