import React from 'react';
import {useCSVReader,} from 'react-papaparse';


export default function CSVReader({updateData}) {
  const { CSVReader } = useCSVReader();
  return (
    <CSVReader
      onUploadAccepted={(results) => {
        // console.log('---------------------------');
        // console.log(results.data);
        // console.log('---------------------------');
        updateData(results.data);
      }}>
      {({
        getRootProps
      }) => (<span {...getRootProps()} style={{backgroundColor:"#CCC",border:"2px solid black",paddingLeft:"15px",paddingRight:"15px",paddingBottom:"5px"}}>
              Open
            </span>
      )}
    </CSVReader>
  );
}